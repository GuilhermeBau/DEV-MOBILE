# Todo App - React + Vite

Aplicativo de lista de tarefas desenvolvido com React e Vite, containerizado com Docker e publicado automaticamente no Docker Hub via GitHub Actions.

## Tecnologias utilizadas

- React 19
- Vite
- Docker (Multi-stage Build com NGINX)
- GitHub Actions (CI/CD)

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como rodar com Docker

```bash
docker pull guilhermebau/todo-app:latest
docker run -d -p 8080:80 guilhermebau/todo-app:latest
```

Acesse em: http://localhost:8080

## Pipeline CI/CD

A cada push na branch `main`, o GitHub Actions automaticamente:
1. Faz o build da imagem Docker
2. Publica a imagem no Docker Hub

## Imagem no Docker Hub

[guilhermebau/todo-app](https://hub.docker.com/r/guilhermebau/todo-app)
