from backend.infra.database.sqlite import SessionLocal
from backend.infra.models.ticket_model import Ticket

class TicketRepository:
  def list(self):
    session = SessionLocal()
    tickets = session.query(Ticket).all()
    session.close()
    return tickets

  def update(self, ticket_id: int, data: dict):
    session = SessionLocal()
    ticket = session.query(Ticket).get(ticket_id)

    if not ticket:
      session.close()
      return None

    for key, value in data.items():
      setattr(ticket, key, value)

    session.commit()
    session.refresh(ticket)
    session.close()
    return ticket