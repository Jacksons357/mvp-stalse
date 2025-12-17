from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TicketResponseDTO(BaseModel):
  id: int
  title: str
  status: str
  priority: str
  created_at: Optional[datetime] = None
  updated_at: Optional[datetime] = None

  class Config:
    from_attributes = True


class TicketUpdateDTO(BaseModel):
  status: Optional[str] = None
  priority: Optional[str] = None
