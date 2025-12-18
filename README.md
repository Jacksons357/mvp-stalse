# STALSE - Desafio Técnico
MVP básico para gerenciamento de tickets e visualizar métricas de arquivos gerados pelo pandas.
<img width="1335" height="852" alt="image" src="https://github.com/user-attachments/assets/17c766d0-3e4c-4ad1-b9e8-68a10446b280" />


O sistema permite visualizar tickets e atualizar status ou prioridade dos mesmos.
<img width="1335" height="852" alt="image" src="https://github.com/user-attachments/assets/c557df15-9067-4481-9767-366d72940be8" />


## Stack
- FastAPI + SQLite
- Next.js (App Router)
- pandas (ETL)
- n8n

## Setup

1. Clone o repositorio:
```bash
git clone https://github.com/Jacksons357/mvp-stalse.git
cd mvp-stalse
```

2. Instalação

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

3. Configure o .env do backend

```bash
cp backend/.env.example backend/.env
```

### Backend

```bash
uvicorn backend.main:app --reload
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

## Data (ETL)

### Setup

Por padrão já está gerado o arquivo, caso queira rodar novamente, apague o arquivo `data/processed/metrics.json` primeiro.

E em seguida execute:
```bash
python data/etl.py
```

### Dataset Utilizado

**Customer Support Ticket Dataset**
- URL: https://www.kaggle.com/datasets/suraj520/customer-support-ticket-dataset/data

Dataset de tickets de suporte ao cliente utilizado para geração de métricas.
Contém informações sobre tipos de ticket, prioridades e datas de criação.

### Colunas do Dataset
- `Ticket ID`: ID único do ticket
- `Customer Name`: Nome do cliente
- `Ticket Type`: Tipo de ticket (ex: Refund request, Technical issue)
- `Ticket Priority`: Prioridade (Low, Medium, High, Critical)
- `Date of Purchase`: Data de compra
- `Created At`: Data de criação do ticket

### Métricas Geradas
O ETL processa o dataset e gera as seguintes métricas:
- Tickets por mês
- Top 5 tipos de ticket
- Distribuição por prioridade
- Total de tickets

### Arquivo de Saída
O ETL gera um arquivo JSON em `data/processed/metrics.json` com as métricas calculadas.

### Exemplo de Saída
```json
{
  "tickets_per_month": [...],
  "top_ticket_types": [...],
  "tickets_by_priority": [...],
  "total_tickets": 8469
}
```

## Frontend


### Setup
```bash
cd frontend
npm install
npm run dev
cp .env.example .env.local
```

- Aplicação rodando em http://localhost:3000

**Certifique de ter o backend rodando em http://localhost:8000**

### Estrutura do Frontend

```
/frontend
  ├─ app/
  │ ├─ app/
  │ ├─ (dashboard)/
  │ │  ├─ components/ - componentes da dashboard
  │ │  │  ├─ tickets/
  │ │  │    ├─ components/ - componentes tickets
  │ │  │    ├─ page.tsx - page tickets
  │ │  ├─ layout.tsx - layout da dashboard
  │ │  └─ page.tsx - page da dashboard
  ├─ components/ - componentes globais reutilizaveis
  │ └─ ui/ - shadcn ui
  ├─ hooks/ - hooks personalizados
  ├─ http/ - requisições HTTP
  ├─ lib/ - configurações
  │ ├─ mutations/ - mutações de estados
  │ └─ queries/ - queries de estados
  ├─ providers/ - providers de contexto
  ├─ public/ - arquivos públicos
  ├─ types/ - tipos
  └─ utils/ - utilitários
```

## N8N - Workflow

O service WebhookService envia um webhook para o n8n quando um ticket é atualizado.