# Necessário para rodar a aplicação

## Será necessário ter o node instalado na sua máquina

1. Será necessário baixar o repositório do github utilizando o gitbash ou outro programa
2. Entre na pasta backend crie um arquivo **.env** com as seguintes configurações: 
   - **DB_PASS=** Deverá conter a senha do usuário do banco 
   - **DB_USER=** Deverá conter o nome do usuário no banco 
   - **DB_NAME=** Deverá conter o nome do banco 
   - **DB_HOST=** Deverá conter o HOST do banco 
   - **DB_PORT=** Deverá conter a porta onde o banco esta rodando
   - Entre na pasta do backend via terminar
     - Agore use o o comando npm install no caso do npm ou yarn install no caso do yarn
     - Após a instalação utilize o comando npm run dev no caso do npm ou yarn dev no caso do yarn
3. Entre na pasta frontend e crie um arquivo **.env.development** com as seguintes configurações: 
   - **VITE_API_URL=** http://localhost:3000 é onde o backend deve estar rodando 
   - **FRONTEND_PORT=** 5000 esse numero é o número onde a porta do frontend deve rodar
   - Entre na pasta do frontend via terminar
     - Agore use o o comando npm install no caso do npm ou yarn install no caso do yarn
     - Após a instalação utilize o comando npm run dev no caso do npm ou yarn dev no caso do yarn
