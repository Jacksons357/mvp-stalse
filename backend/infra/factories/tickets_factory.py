from backend.services.tickets_service import TicketsService
from backend.infra.repository.ticket_repository import TicketRepository
from backend.services.webhook_service import WebhookService

def make_tickets_service():
  ticket_repository = TicketRepository()
  webhook_service = WebhookService()

  return TicketsService(ticket_repository, webhook_service)