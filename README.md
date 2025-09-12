# 📚 Biblioteca API – Emerson

API de Biblioteca Escolar desenvolvida com **NestJS**, **Prisma** e **MySQL**.  
Inclui autenticação JWT, controle de usuários e papéis (roles), gerenciamento de livros e fluxo de empréstimos/devoluções.

---

## 🚀 Tecnologias
- [NestJS](https://nestjs.com/) – Framework Node.js
- [Prisma](https://www.prisma.io/) – ORM
- [MySQL](https://www.mysql.com/) – Banco de dados relacional
- [JWT](https://jwt.io/) – Autenticação

---

## ⚙️ Requisitos
- Node.js 18+
- MySQL 8+
- NPM ou Yarn
- Postman ou [APIDog](https://apidog.com/) (para testes)

---

## 📂 Estrutura inicial
- `User` → cadastro de usuários (com roles: ADMIN, TEACHER, COORDINATOR, STUDENT)  
- `Book` → cadastro e disponibilidade de livros  
- `Loan` → fluxo de empréstimo e devolução (com transações)  

---

## 🔧 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Emerson-lab/biblioteca-api-emerson
cd biblioteca-api-emerson
```

### 2. Clonar o repositório
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz com:
```bash
DATABASE_URL=mysql://root:SUA_SENHA@localhost:3306/biblioteca
JWT_SECRET=biblioteca_api_dev_secret
JWT_EXPIRES_IN=1h
```

### 4. Rodar migrations
```bash
npx prisma migrate dev --name init
```

### 5. Iniciar a aplicação
```bash
npm run dev
```

A API ficará disponível em:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📝 Autor
Desenvolvido por **Emerson Trindade**