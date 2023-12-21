# Necessário para rodar a aplicação

## Será necessário ter o node instalado na sua máquina

1. Será necessário baixar o repositório do github utilizando o gitbash ou outro programa
2. Entre na pasta backend crie um arquivo **.env** com as seguintes configurações: 
   - **DB_PASS=** Deverá conter a senha do usuário do banco 
   - **DB_USER=** Deverá conter o nome do usuário no banco 
   - **DB_NAME=** Deverá conter o nome do banco 
   - **DB_HOST=** Deverá conter o HOST do banco 
   - **DB_PORT=** Deverá conter a porta onde o banco esta rodando
   - Entre na pasta do backend via terminal
     - Agore use o o comando `npm install` no caso do npm ou `yarn install` no caso do yarn
     - Após a instalação utilize o comando `npm run dev` no caso do npm ou `yarn dev` no caso do yarn
3. Entre na pasta frontend e crie um arquivo **.env.development** com as seguintes configurações: 
   - **VITE_API_URL=** http://localhost:3000 é onde o backend deve estar rodando 
   - **FRONTEND_PORT=** 5000 esse numero é o número onde a porta do frontend deve rodar
   - Entre na pasta do frontend via terminar
     - Agore use o o comando `npm install` no caso do npm ou `yarn install` no caso do yarn
     - Após a instalação utilize o comando `npm run dev` no caso do npm ou `yarn dev` no caso do yarn


# Requirements to run the application

## Node.js installation is required on your machine.

1. You'll need to download the repository from GitHub using Gitbash or another program.
2. Inside the backend folder, create a **.env** file with the following configurations:
   - **DB_PASS=** Should contain the database user's password.
   - **DB_USER=** Should contain the username in the database.
   - **DB_NAME=** Should contain the database name.
   - **DB_HOST=** Should contain the database HOST.
   - **DB_PORT=** Should contain the port where the database is running.
   - Navigate to the backend folder using the terminal.
     - Use the command `npm install` for npm or `yarn install` for yarn.
     - After installation, use the command `npm run dev` for npm or `yarn dev` for yarn.
3. Inside the frontend folder, create a **.env.development** file with the following configurations:
   - **VITE_API_URL=** http://localhost:3000 is where the backend should be running.
   - **FRONTEND_PORT=** 5000 is the port number where the frontend should run.
   - Navigate to the frontend folder using the terminal.
     - Use the command `npm install` for npm or `yarn install` for yarn.
     - After installation, use the command `npm run dev` for npm or `yarn dev` for yarn.

