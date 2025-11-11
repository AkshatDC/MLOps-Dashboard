# MLOps Dashboard with Explainability & Drift Detection

[![Python](https://img.shields.io/badge/python-3.9+-blue.svg)]()
[![FastAPI](https://img.shields.io/badge/FastAPI-0.85.0-green)]()
[![React](https://img.shields.io/badge/React-18.2.0-blue)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

---

## Overview

This project is a **cloud-hosted MLOps Dashboard** that provides real-time monitoring of machine learning model performance, integrated with powerful **Explainability** and **Drift Detection** modules. It aims to address critical challenges in deploying responsible and reliable AI systems across industries.

The dashboard offers:
- **Model performance metrics** (accuracy, precision, recall, F1-score, latency)
- **Explainability visualizations** using SHAP and LIME to interpret model predictions transparently
- **Data and concept drift detection** to ensure model reliability and business value
- **User-friendly interface** tailored for diverse stakeholders (data scientists, business users, regulators)

The project showcases best practices in AI lifecycle management, interpretability, and proactive model governance—key pillars emphasized by Persistent Systems in their enterprise AI solutions.

---

## Key Features

- **Real-Time Model Monitoring:** Track essential metrics to evaluate deployed ML models continuously.
- **Explainability Module:** Generate global and local explanations for model outputs with interactive visualizations.
- **Drift Detection Module:** Implement statistical and ML-based techniques to detect dataset and concept drifts, raising alerts for timely interventions.
- **Cloud-Ready Deployment:** Easily deployable on AWS, Azure, or Google Cloud using Docker containers.
- **Modular Architecture:** Clear separation between backend API, explainability & drift detection logic, and frontend UI.
- **Extensive Documentation and Testing:** Includes setup guides, architectural overviews, and unit/integration tests.

---

## Tech Stack

| Component          | Technology            |
|--------------------|-----------------------|
| Backend API        | Python (FastAPI)      |
| Explainability     | SHAP, LIME            |
| Drift Detection    | Scikit-multiflow, custom stats |
| Frontend UI        | React.js, Chart.js/Plotly |
| Database           | PostgreSQL |
| Deployment         | Docker, AWS/Azure/GCP |
| Testing            | Pytest (backend), Jest (frontend) |

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Python 3.9+
- Node.js 16+
- Docker (optional for containerized deployment)
- Git
