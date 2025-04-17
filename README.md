# infosystemas-node
Repositorio destinado ao envio do test de backend info systemas

# 🚗 API de Veículos - Node.js + Swagger

Esta é uma API RESTful para gerenciamento de veículos com persistência em arquivos JSON, utilizando Node.js, Express e documentação automática com Swagger.

## 📦 Tecnologias Utilizadas

- Node.js
- Express
- Swagger (swagger-jsdoc + swagger-ui-express)
- UUID
- Mocha/Chai (para testes)
- Clean Code e arquitetura MVC

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório ou extrair o ZIP

```bash
cd infosystemas-node-main
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar o servidor

```bash
npm start
```

O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

### 4. Acessar a documentação Swagger

```url
http://localhost:3000/docs
```

---
### 5. Testes unitários
Para rodar o teste utilize npm test

## 🔀 Endpoints da API

| Método | Rota               | Descrição                      |
|--------|--------------------|-------------------------------|
| GET    | `/api/vehicles`    | Listar todos os veículos      |
| GET    | `/api/vehicles/:id`| Buscar veículo por ID         |
| POST   | `/api/vehicles`    | Criar novo veículo            |
| PUT    | `/api/vehicles/:id`| Atualizar veículo existente   |
| DELETE | `/api/vehicles/:id`| Remover veículo               |

---

## 📁 Estrutura do Projeto

```
src/
├── app.js
├── config/
│   └── swagger.js
├── controllers/
│   └── vehicleController.js
├── models/
│   └── vehicleModel.js
├── routes/
│   └── vehicleRoutes.js
├── services/
│   └── vehicleService.js
├── data/
│   └── vehicles.json
├── tests/
│   └── vehicle.test.js 
```

---

## 🧹 Limpar projeto

Se quiser apagar dependências e o lockfile para reinstalar tudo do zero:

```bash
rm -rf node_modules package-lock.json
npm install
```

---
Para rodar o teste utilize npm test
## ✍️ Autor

Edenir Pereira Martins
