# STALSE - Desafio Técnico
MVP básico para gerenciamento de tickets e visualizar métricas de arquivos gerados pelo pandas.

O sistema permite visualizar tickets e atualizar status ou prioridade dos mesmos.

## Stack
- FastAPI + SQLite
- Next.js (App Router)
- pandas (ETL)
- n8n

## Setup Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

- Aplicação rodando em http://localhost:8000
- Documentação da API em http://localhost:8000/docs

### Estrutura do Backend
```
/backend
  ├─ controllers/ - definição das rotas HTTP e orquestração das requisições
  ├─ dtos/ - DTOs para requisições e respostas
  ├─ services/ - camada de aplicação (use cases)
  ├─ infra/ - configurações de banco de dados e conexões
  │ ├─ database/ - módulos de conexão e inicialização do SQLite
  │ ├─ factories/ - injeção de dependências e criação de objetos
  │ ├─ models/ - definições das entidades do banco de dados
  │ ├─ repository/ - camada de acesso aos dados do banco
  │ └─ seeds/ - dados iniciais do banco
  ├─ main.py (FastAPI app) - ponto de entrada da API, registro das rotas e seeds.
  └─ requirements.txt - dependências do backend
```
