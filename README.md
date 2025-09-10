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
- Postman (para testes)

---

## 📂 Estrutura inicial
- `User` → cadastro de usuários (com roles: ADMIN, TEACHER, COORDINATOR, STUDENT)  
- `Book` → cadastro e disponibilidade de livros  
- `Loan` → fluxo de empréstimo e devolução  

---

## 🔧 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/biblioteca-api-emerson.git
cd biblioteca-api-emerson
