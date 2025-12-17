import json
from backend.infra.database.sqlite import SessionLocal, engine, Base
from backend.infra.models.ticket_model import Ticket

def run_seeds():
  Base.metadata.create_all(bind=engine)
  session = SessionLocal()

  if session.query(Ticket).count() > 0:
    session.close()
    return

  with open("./backend/infra/seeds/tickets.json") as f:
    tickets = json.load(f)

  for t in tickets:
    session.add(Ticket(**t))

  session.commit()
  session.close()