from backend.services.metrics_service import MetricsService
from backend.infra.repository.metrics_repository import MetricsRepository

def make_metrics_service():
  repository = MetricsRepository()
  return MetricsService(repository)