from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MLOps Dashboard Backend")

# Allow CORS for localhost frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock endpoint for model metrics
@app.get("/metrics")
async def get_model_metrics():
    return {
        "accuracy": 0.92,
        "precision": 0.89,
        "recall": 0.85,
        "f1_score": 0.87,
        "inference_latency_ms": 120,
        "history": {
            "dates": ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
            "accuracy": [0.88, 0.90, 0.91, 0.89, 0.92],
            "precision": [0.85, 0.87, 0.89, 0.88, 0.90],
            "recall": [0.80, 0.82, 0.83, 0.84, 0.85]
        }
    }

# Mock endpoint for explainability data
@app.get("/explainability")
async def get_explainability():
    return {
        "features": ["Age", "Income", "Credit Score", "Employment Length", "Loan Amount"],
        "importance": [25, 20, 18, 15, 12]
    }

# Mock endpoint for drift detection status
@app.get("/drift")
async def get_drift_status():
    return {
        "dates": ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        "drift_scores": [0.05, 0.07, 0.08, 0.12, 0.18],
        "threshold": 0.15,
        "alert": True
    }