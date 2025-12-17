from fastapi import APIRouter

from infra.factories.tickets_factory import make_tickets_service
from dtos.ticket_dto import TicketResponseDTO, TicketUpdateDTO

router = APIRouter()
tickets_service = make_tickets_service()

@router.get("/")
async def list_tickets():
  return tickets_service.list_tickets()

@router.patch("/{ticket_id}", response_model=TicketResponseDTO)
async def update_ticket(ticket_id: int, payload: TicketUpdateDTO):
  return tickets_service.update_ticket(ticket_id, payload)