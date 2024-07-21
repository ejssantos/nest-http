# Use a imagem base oficial do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie todo o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta na qual a aplicação será executada
EXPOSE 3001

# Defina o comando para iniciar a aplicação
CMD ["node", "dist/main"]
