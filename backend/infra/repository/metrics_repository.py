from pathlib import Path
import json

class MetricsRepository:
  def __init__(self, path="data/processed/metrics.json"):
    self.path = Path(path)

  def load(self) -> dict:
    if not self.path.exists():
      raise FileNotFoundError("Metrics not found")

    return json.loads(self.path.read_text())