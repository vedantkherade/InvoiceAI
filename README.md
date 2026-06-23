# 🧾 InvoiceAI

An AI-powered invoice generation and management platform built with the MERN stack and Google Gemini AI. InvoiceAI enables businesses and freelancers to create professional invoices using natural language prompts, manage invoice records, track revenue, and streamline billing workflows through a modern and intuitive dashboard.

---

## 🚀 Features

### 🤖 AI-Powered Invoice Generation
Generate complete invoices using natural language prompts with Google Gemini AI, reducing manual effort and improving productivity.

### 📄 Invoice Management
- Create, edit, and delete invoices
- Preview invoices before saving
- Print invoices directly from the application
- Export invoices as PDF documents
- Track invoice payment status

### 📊 Analytics Dashboard
- Monitor total revenue
- Track unpaid invoice amounts
- View paid vs unpaid invoice distribution
- Gain business insights through visual analytics

### 🔐 Authentication & Security
- Secure user authentication with Clerk
- Google OAuth integration
- Protected routes and session management
- User-specific invoice and business data

### 🏢 Business Profile Management
- Configure business details and branding
- Manage tax percentages
- Upload signatures and digital stamps
- Auto-fill business information in invoices

### 🔍 Search & Filtering
- Filter invoices by invoice number
- Search invoices by client name
- Filter based on payment status
- Efficient invoice organization and retrieval

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI Integration
- Google Gemini AI API

### Authentication
- Clerk
- Google OAuth

---

## 📁 Project Structure

```bash
INVOICEAI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── eslint.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/invoiceai.git
cd invoiceai
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key

CLERK_SECRET_KEY=your_clerk_secret_key
```

### Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Run Locally

### Start Backend Server

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Application will be available at:

```bash
http://localhost:5173
```

---


## 🎯 Future Improvements

- Recurring invoices
- Email invoice delivery
- Payment gateway integration
- Multi-currency support
- Team collaboration features
- Advanced financial reporting

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---


## 👨‍💻 Author

**Vedant Kherade**
