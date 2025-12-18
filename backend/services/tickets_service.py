from backend.infra.repository.ticket_repository import TicketRepository
from backend.dtos.ticket_dto import TicketResponseDTO, TicketUpdateDTO
from backend.services.webhook_service import WebhookService

class TicketsService:
  def __init__(
    self,
    ticket_repository: TicketRepository,
    webhook_service: WebhookService,
  ):
    self.ticket_repository = ticket_repository
    self.webhook_service = webhook_service

  def list_tickets(self) -> list[TicketResponseDTO]:
    tickets = self.ticket_repository.list()
    return [TicketResponseDTO.model_validate(ticket) for ticket in tickets]

  def update_ticket(self, ticket_id: int, data: TicketUpdateDTO) -> TicketResponseDTO | None:
    # Pega ticket antes da atualização
    ticket_before = self.ticket_repository.find_by_id(ticket_id)
    if not ticket_before:
      return None

    updated_ticket = self.ticket_repository.update(ticket_id, data.model_dump(exclude_unset=True))
    if not updated_ticket:
      return None

    ticket_dto = TicketResponseDTO.model_validate(updated_ticket)

    # Checa se houve mudança para status=closed ou priority=high
    send_webhook = False
    updated_fields = data.model_dump(exclude_unset=True)

    if "status" in updated_fields and ticket_dto.status == "closed" and ticket_before.status != "closed":
      send_webhook = True
    if "priority" in updated_fields and ticket_dto.priority == "high" and ticket_before.priority != "high":
      send_webhook = True

    if send_webhook:
      self.webhook_service.send_ticket_update(ticket_dto.model_dump())

    return ticket_dto