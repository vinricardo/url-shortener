# Encurtador de URL

<p>Este projeto tem como objetivo mostrar uma simples aplicação de um encurtador de URL.</p>

## Configuração

* É necessário criar um arquivo _.env_ na raiz do projeto contendo as informações para um banco de dados, nesse caso, foi utilizado o Postgres e adicionado como mostra a seguir:
<code>DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_url?schema=public"</code>

* Após isso, precisa-se instalar as dependências utilizadas no projeto com o comando: 
<code>npm install</code>

* Também há a necessidade de atulizar as tabelas do banco criado com o comando:
<code>npx prisma migrate dev</code>

* Por fim, agora é só iniciar a aplicação com:
<code>npm run exec</code>
