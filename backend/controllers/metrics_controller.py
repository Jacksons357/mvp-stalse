from fastapi import APIRouter, HTTPException
from backend.infra.factories.metrics_factory import make_metrics_service

router = APIRouter()
metrics_service = make_metrics_service()

@router.get("/")
async def get_metrics():
  try:
    return {
      "tickets_per_month": metrics_service.get_tickets_per_month(),
      "top_ticket_types": metrics_service.get_top_ticket_types(),
      "tickets_by_priority": metrics_service.get_tickets_by_priority(),
      "total_tickets": metrics_service.total_tickets()
    }

  except FileNotFoundError:
    raise HTTPException(status_code=404, detail="Nenhuma métrica gerada ainda")