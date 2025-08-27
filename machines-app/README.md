# 🚀 Sistema de Monitoramento de Máquinas

## 📋 Objetivo
Desenvolver uma aplicação básica que simule parte do funcionamento de uma plataforma de monitoramento de máquinas pesadas utilizando telemetria. O foco será na criação de uma API no backend, utilizando .NET (C#) e uma interface frontend em Angular (TypeScript).

## 🛠️ Tecnologias Utilizadas

### Backend
- **Linguagem**: C#
- **Framework**: .NET 9
- **ORM**: Entity Framework
- **Documentação**: Swagger/OpenAPI

### Frontend
- **Linguagem**: TypeScript
- **Framework**: Angular 17
- **Estilização**: CSS3
- **Estrutura**: HTML5

## 📦 Pré-requisitos

### Obrigatórios
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) - Para o backend
- [Node.js](https://nodejs.org/) (versão 18 ou superior) - Para o frontend
- [npm](https://www.npmjs.com/) - Gerenciador de pacotes (vem com Node.js)

### Opcionais
- [Postman](https://www.postman.com/) - Para testar a API
- [Visual Studio Code](https://code.visualstudio.com/) - Editor recomendado

## 🚀 Instalação Rápida

### 1️⃣ Clone o projeto
```bash
git clone <url-do-repositorio>
cd "Projeto Monitoramento"
```

### 2️⃣ Configure o Backend (.NET)
```bash
cd MachineManagement.API
dotnet restore
dotnet build
```

### 3️⃣ Configure o Frontend (Angular)
```bash
cd machines-app
npm install
```

## ▶️ Como Executar

### 🔧 Backend (.NET)
```bash
cd MachineManagement.API
dotnet run
```
✅ **Backend rodando em**: `https://localhost:7000`

**💡 Dica**: A API estará disponível e você pode testar com Postman!

### 🎨 Frontend (Angular)
```bash
cd machines-app
npm start
```
✅ **Frontend rodando em**: `http://localhost:4200`

**🚀 Alternativa mais rápida**:
```bash
ng serve -o
```
*Este comando abre automaticamente no navegador!*

## 📱 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🏠 **Dashboard** | Visualização de todas as máquinas cadastradas |
| ➕ **Cadastro** | Adicionar novas máquinas ao sistema |
| 👁️ **Detalhes** | Ver informações completas de cada máquina |
| 📊 **Status** | Controle de status: Ativo, Manutenção, Inativo |

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/machines` | Listar todas as máquinas |
| `GET` | `/api/machines/{id}` | Buscar máquina por ID |
| `POST` | `/api/machines` | Criar nova máquina |
| `PUT` | `/api/machines/{id}` | Atualizar máquina |
| `DELETE` | `/api/machines/{id}` | Remover máquina |

## 🧪 Testando a API

### Com Postman
1. Abra o Postman
2. Use a URL base: `https://localhost:7000`
3. Teste os endpoints acima
4. As respostas virão em formato JSON

### Exemplo de JSON para criar máquina:
```json
{
  "name": "Máquina de Corte CNC",
  "location": "Setor A - Linha 1",
  "status": "Ativo"
}
```

## 📁 Estrutura do Projeto

```
Projeto Monitoramento/
├── 📂 MachineManagement.API/     # Backend .NET
│   ├── Controllers/              # Endpoints da API
│   ├── Models/                   # Modelos de dados
│   ├── Services/                 # Lógica de negócio
│   └── Program.cs                # Configuração
└── 📂 machines-app/              # Frontend Angular
    ├── src/app/                  # Código da aplicação
    │   ├── pages/                # Páginas/componentes
    │   ├── services/             # Serviços Angular
    │   ├── models/               # Interfaces TypeScript
    │   └── app.routes.ts         # Rotas da aplicação
    └── src/styles.css            # Estilos globais
```

