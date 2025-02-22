# Finance Manager Application

## 🚀 Live Demo
- Backend API: [https://expense-track-backend.onrender.com](https://expense-track-backend.onrender.com)

## 🛠️ Tech Stack
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT

## 📌 Features
- User Authentication
- Transaction Management
- Budget Tracking
- Category-wise Expense Analysis
- Monthly/Yearly Reports
- Budget Alerts

## 🔧 Installation

### Prerequisites
- Node.js >= 16
- pnpm >= 9
- MongoDB >= 6

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/joy095/Expense-Track-Backend

# Navigate to server directory
cd Expense-Track-Backend

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env

# Start development server
pnpm dev
```

### Frontend Setup
```bash
# Navigate to client directory
cd ../client

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🔑 Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```


## 📚 API Documentation

### Authentication

#### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securePassword123",
    "name": "John Doe"
  }'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securePassword123"
  }'
```

### Transactions

#### Get All Transactions
```bash
curl -X GET http://localhost:5000/api/transaction/all \
  -H "Authorization: Bearer <your_jwt_token>"
```

#### Create Transaction
```bash
curl -X POST http://localhost:5000/api/transaction \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Grocery Shopping",
    "amount": 50.00,
    "category": "Food",
    "type": "expense",
    "date": "2024-02-21"
  }'
```

### Budgets

#### Get All Budgets
```bash
curl -X GET http://localhost:5000/api/budget \
  -H "Authorization: Bearer <your_jwt_token>"
```

#### Create Budget
```bash
curl -X POST http://localhost:5000/api/budget \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "Food",
    "amount": 500.00,
    "period": "monthly",
    "alertThreshold": 80
  }'
```

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd server
pnpm test

# Frontend tests
cd client
pnpm test
```

## 📝 API Response Formats

### Success Response
```json
{
  "success": true,
  "data": {
    "id": "123",
    "attribute": "value"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔒 Security Features
- JWT Authentication
- Rate Limiting
- Request Validation
- CORS Protection
- Password Hashing
- XSS Protection

## 🏗️ Project Structure

### Backend
```
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── tests/
└── package.json
```