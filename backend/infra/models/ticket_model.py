from sqlalchemy import Column, Integer, String, DateTime
from backend.infra.database.sqlite import Base
from datetime import datetime

class Ticket(Base):
  __tablename__ = "tickets"

  id = Column(Integer, primary_key=True, index=True)
  title = Column(String, index=True, nullable=False)
  status = Column(String, default="open")
  priority = Column(String, default="medium")
  created_at = Column(
    DateTime,
    default=datetime.now,
    nullable=False
  )

  updated_at = Column(
    DateTime,
    default=datetime.now,
    onupdate=datetime.now,
    nullable=False
  )