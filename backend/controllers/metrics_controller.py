from pathlib import Path
from fastapi import APIRouter
import json

router = APIRouter()

@router.get("/")
async def get_metrics():
  path = Path("data/processed/metrics.json")

  if not path.exists():
    return {"error": "Nenhuma métrica gerada ainda..."}

  return json.loads(path.read_text())