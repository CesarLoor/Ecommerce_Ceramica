/**
 * Archivo de definición de tipos para el Quality Scoring Engine (McCall Model)
 */

/**
 * @typedef {Object} QualityMetrics
 * @property {number} coveragePercent - Cobertura de pruebas (0-100)
 * @property {number} bugs - Bugs críticos detectados
 * @property {number} smells - Code smells
 * @property {number} vulnerabilities - Vulnerabilidades críticas de seguridad
 * @property {number} [totalTests] - Total de tests ejecutados (opcional)
 * @property {number} [passedTests] - Tests que pasaron (opcional)
 * @property {number} [lintErrors] - Errores de ESLint (opcional)
 */

/**
 * @typedef {Object} QualityScoreBreakdown
 * @property {{score: number, weight: number, contribution: number}} correctness
 * @property {{score: number, weight: number, contribution: number}} testability
 * @property {{score: number, weight: number, contribution: number}} maintainability
 * @property {{score: number, weight: number, contribution: number}} integrity
 */

/**
 * @typedef {Object} QualityScoreResult
 * @property {number} overallScore - Score final (0-100)
 * @property {QualityScoreBreakdown} breakdown - Desglose por factor
 * @property {{calculatedAt: string, version: string, thresholds: {minimumAcceptable: number, target: number, excellent: number}}} metadata
 * @property {string[]} recommendations - Recomendaciones accionables (ciclo Act-PDCA)
 */

module.exports = {};
