# estagio 1 - fazendo o build da aplicacao com node
FROM node:20-alpine AS build

WORKDIR /app

# copiando os arquivos de dependencia primeiro
COPY package*.json ./
RUN npm install

# copiando o resto do projeto e gerando a pasta dist
COPY . .
RUN npm run build

# estagio 2 - servindo o build com nginx
FROM nginx:stable-alpine

# copiando so o que precisa (a pasta dist gerada no estagio anterior)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
