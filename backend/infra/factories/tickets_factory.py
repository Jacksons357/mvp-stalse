from backend.services.tickets_service import TicketsService
from backend.infra.repository.ticket_repository import TicketRepository

def make_tickets_service():
  repository = TicketRepository()
  return TicketsService(repository)