import pandas as pd
from pathlib import Path

RAW_PATH = Path("data/raw/support_tickets.csv")
PROCESSED_PATH = Path("data/processed/metrics.json")

def run_etl():
  df = pd.read_csv(RAW_PATH)

  df.columns = df.columns.str.strip()

  # Parse de data
  DATE_COLUMN = "Date of Purchase"

  if DATE_COLUMN not in df.columns:
      raise ValueError(f"Coluna '{DATE_COLUMN}' não encontrada no dataset")

  df["created_at"] = pd.to_datetime(df[DATE_COLUMN], errors="coerce")

  # Remove datas inválidas
  df = df.dropna(subset=["created_at"])

  # --------------------
  # Métrica 1: Tickets por mês
  # --------------------
  tickets_per_month = (
    df.groupby(df["created_at"].dt.to_period("M"))
    .size()
    .reset_index(name="count")
  )

  # Converte Period → string (JSON-friendly)
  tickets_per_month["created_at"] = tickets_per_month["created_at"].astype(str)

  # --------------------
  # Métrica 2: Top tipos de ticket
  # --------------------
  top_ticket_types = (
    df["Ticket Type"]
    .value_counts()
    .head(5)
    .reset_index()
  )

  top_ticket_types.columns = ["ticket_type", "count"]

  # --------------------
  # Métrica 3: Tickets por prioridade
  # --------------------
  tickets_by_priority = (
    df["Ticket Priority"]
    .value_counts()
    .reset_index()
  )

  tickets_by_priority.columns = ["priority", "count"]

  metrics = {
    "tickets_per_month": tickets_per_month.to_dict(orient="records"),
    "top_ticket_types": top_ticket_types.to_dict(orient="records"),
    "tickets_by_priority": tickets_by_priority.to_dict(orient="records"),
    "total_tickets": int(len(df))
  }

  PROCESSED_PATH.parent.mkdir(parents=True, exist_ok=True)

  with open(PROCESSED_PATH, "w") as f:
    import json
    json.dump(metrics, f, indent=2, default=str)

  print("✅ ETL finalizado com sucesso")
  print(f"📄 Arquivo gerado em: {PROCESSED_PATH}")

if __name__ == "__main__":
  run_etl()
