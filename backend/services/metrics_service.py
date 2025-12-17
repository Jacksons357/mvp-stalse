class MetricsService:
  def __init__(self, repository):
    self.repository = repository

  def get_tickets_per_month(self):
    raw = self.repository.load()["tickets_per_month"]

    result: dict[str, list] = {}

    for item in raw:
      year, month = item["created_at"].split("-")

      if year not in result:
        result[year] = []

      result[year].append({
        "month": int(month),
        "count": item["count"],
      })

    return result

  def get_top_ticket_types(self):
    return self.repository.load()["top_ticket_types"]

  def get_tickets_by_priority(self):
    return self.repository.load()["tickets_by_priority"]
  
  def total_tickets(self):
    return self.repository.load()["total_tickets"]