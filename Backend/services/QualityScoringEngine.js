/**
 * @typedef {import('../types/quality.types').QualityMetrics} QualityMetrics
 * @typedef {import('../types/quality.types').QualityScoreResult} QualityScoreResult
 */

const WEIGHTS = {
  correctness: 0.3,
  testability: 0.3,
  maintainability: 0.2,
  integrity: 0.2,
};

const THRESHOLDS = {
  minimumAcceptable: 70,
  target: 85,
  excellent: 95,
};

class QualityScoringEngine {
  /**
   * Calcula el score de calidad de software según el Modelo de McCall
   * @param {QualityMetrics} metrics - Métricas actuales del proyecto
   * @returns {QualityScoreResult}
   */
  static calculateScore(metrics) {
    // 1. Calcular scores individuales basados en las fórmulas definidas
    const correctnessScore = Math.max(100 - (metrics.bugs * 10), 0);
    const testabilityScore = Math.min(metrics.coveragePercent, 100);
    const maintainabilityScore = Math.max(100 - (metrics.smells * 2), 0);
    const integrityScore = metrics.vulnerabilities === 0 ? 100 : 0;

    // 2. Calcular contribuciones considerando los pesos
    const correctnessContrib = correctnessScore * WEIGHTS.correctness;
    const testabilityContrib = testabilityScore * WEIGHTS.testability;
    const maintainabilityContrib = maintainabilityScore * WEIGHTS.maintainability;
    const integrityContrib = integrityScore * WEIGHTS.integrity;

    // 3. Score global
    const overallScore = Math.round(
      correctnessContrib + testabilityContrib + maintainabilityContrib + integrityContrib
    );

    // 4. Generar Breakdown
    const breakdown = {
      correctness: { score: correctnessScore, weight: WEIGHTS.correctness, contribution: Math.round(correctnessContrib * 100) / 100 },
      testability: { score: testabilityScore, weight: WEIGHTS.testability, contribution: Math.round(testabilityContrib * 100) / 100 },
      maintainability: { score: maintainabilityScore, weight: WEIGHTS.maintainability, contribution: Math.round(maintainabilityContrib * 100) / 100 },
      integrity: { score: integrityScore, weight: WEIGHTS.integrity, contribution: Math.round(integrityContrib * 100) / 100 }
    };

    // 5. Generar recomendaciones (Fase ACT del PDCA)
    const recommendations = this._generateRecommendations(breakdown, metrics);

    return {
      overallScore,
      breakdown,
      metadata: {
        calculatedAt: new Date().toISOString(),
        version: '1.0.0',
        thresholds: THRESHOLDS
      },
      recommendations
    };
  }

  /**
   * Genera recomendaciones dinámicas basadas en los resultados obtenidos
   * @private
   */
  static _generateRecommendations(breakdown, metrics) {
    const recommendations = [];

    if (breakdown.correctness.score < THRESHOLDS.target) {
      recommendations.push(`🔴 Corregir los ${metrics.bugs} bugs detectados para mejorar la correctitud del sistema.`);
    }

    if (breakdown.testability.score < THRESHOLDS.target) {
      recommendations.push(`🟡 Agregar pruebas unitarias para alcanzar ≥${THRESHOLDS.target}% de cobertura. Priorizar servicios y controladores.`);
    }

    if (breakdown.maintainability.score < THRESHOLDS.target) {
      recommendations.push(`🟡 Refactorizar código para reducir los code smells y la deuda técnica (actuales: ${metrics.smells}).`);
    }

    if (breakdown.integrity.score < 100) {
      recommendations.push(`🔴 ¡CRÍTICO! Resolver las ${metrics.vulnerabilities} vulnerabilidades de seguridad inmediatamente.`);
    }

    return recommendations.length > 0 ? recommendations : ["✅ El código cumple con excelentes estándares de calidad. ¡Buen trabajo!"];
  }
}

module.exports = QualityScoringEngine;
