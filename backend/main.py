from fastapi import FastAPI
from backend.controllers.tickets_controller import router as tickets_router
from backend.infra.seeds.seed_tickets import run_seeds
from backend.controllers.metrics_controller import router as metrics_router

app = FastAPI()

app.include_router(tickets_router, prefix="/tickets")
app.include_router(metrics_router, prefix="/metrics")

run_seeds()

@app.get("/")
async def root():
  return {"message": "Welcome to the Stalse API"}