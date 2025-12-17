from infra.repository.ticket_repository import TicketRepository
from dtos.ticket_dto import TicketResponseDTO, TicketUpdateDTO

class TicketsService:
  def __init__(self, ticket_repository: TicketRepository):
    self.ticket_repository = ticket_repository

  def list_tickets(self) -> list[TicketResponseDTO]:
    tickets = self.ticket_repository.list()
    return [TicketResponseDTO.model_validate(ticket) for ticket in tickets]

  def update_ticket(self, ticket_id: int, data: TicketUpdateDTO) -> TicketResponseDTO | None:
    updated_ticket = self.ticket_repository.update(ticket_id, data.model_dump(exclude_unset=True))
    return TicketResponseDTO.model_validate(updated_ticket) if updated_ticket else None