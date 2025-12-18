import requests
import os
import json

class WebhookService:
  def __init__(self):
    self.webhook_url = os.getenv("N8N_WEBHOOK_URL")
    if not self.webhook_url:
      raise ValueError("N8N_WEBHOOK_URL não está definida no .env")

  def send_ticket_update(self, ticket_data: dict) -> None:
    try:
      requests.post(
        self.webhook_url,
        data=json.dumps(ticket_data, default=str),
        headers={"Content-Type": "application/json"},
        timeout=5
      )
    except Exception as e:
      print(f"Erro ao enviar webhook: {e}")