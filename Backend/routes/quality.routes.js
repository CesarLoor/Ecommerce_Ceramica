const express = require('express');
const router = express.Router();
const QualityScoringEngine = require('../services/QualityScoringEngine');

/**
 * Extrae las métricas de req.query o usa los valores por defecto del proyecto MVP.
 */
const getMetrics = (query) => {
    return {
        coveragePercent: query.coverage !== undefined ? Number(query.coverage) : 82,
        bugs: query.bugs !== undefined ? Number(query.bugs) : 1,
        smells: query.smells !== undefined ? Number(query.smells) : 8,
        vulnerabilities: query.vulnerabilities !== undefined ? Number(query.vulnerabilities) : 0,
    };
};

// GET /api/quality/score
router.get('/score', (req, res) => {
    try {
        const metrics = getMetrics(req.query);
        const result = QualityScoringEngine.calculateScore(metrics);

        let qualityStatus = "DEFICIENTE";
        let emoji = "🔴";

        if (result.overallScore >= result.metadata.thresholds.excellent) {
            qualityStatus = "EXCELENTE";
            emoji = "✅";
        } else if (result.overallScore >= result.metadata.thresholds.target) {
            qualityStatus = "BUENO";
            emoji = "🟢";
        } else if (result.overallScore >= result.metadata.thresholds.minimumAcceptable) {
            qualityStatus = "ACEPTABLE";
            emoji = "🟡";
        }

        res.json({
            success: true,
            data: result,
            message: `${emoji} Calidad del proyecto: ${qualityStatus}`
        });
    } catch (error) {
        console.error('[QualityScore] Error al calcular el score:', error.message);
        res.status(500).json({ success: false, message: "Error interno en el motor de calidad" });
    }
});

// GET /api/quality/gate
router.get('/gate', (req, res) => {
    try {
        const metrics = getMetrics(req.query);
        const result = QualityScoringEngine.calculateScore(metrics);
        const passes = result.overallScore >= result.metadata.thresholds.minimumAcceptable;

        if (passes) {
            res.status(200).json({ passes: true, score: result.overallScore, threshold: result.metadata.thresholds.minimumAcceptable, message: "Quality Gate: PASSED ✅" });
        } else {
            // Fallo intencional con 424 Failed Dependency para que CI/CD lo detecte como error
            res.status(424).json({ passes: false, score: result.overallScore, threshold: result.metadata.thresholds.minimumAcceptable, message: "Quality Gate: FAILED ❌ - Requiere mejoras" });
        }
    } catch (error) {
        console.error('[QualityScore] Error en Quality Gate:', error.message);
        res.status(500).json({ passes: false, message: "Error evaluando el Quality Gate" });
    }
});

module.exports = router;
