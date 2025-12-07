### Product Store Frontend

A responsive React-based frontend that displays products, supports filtering, pagination, search, product detail view, and includes an enquiry system where customers can submit enquiries for specific products.
An admin can view all enquiries in a beautifully styled interface.

## Features

# Product Features

-> Product listing page

-> Search by product name

-> Category filter

-> Pagination + limit selection

-> Product detail modal with image, long description & price

-> Enquiry form modal with validation

# Enquiry System

-> Customers can submit enquiries for any product

# Form validation for:

-> Name

-> Email

-> Phone

-> Message

-> All enquiries are stored in the backend (SQLite)

# Admin Features

-> Admin login

-> View all enquiries in a clean grid UI

-> Logout functionality

-> Responsive layout for mobile users

-> Automatically formatted enquiry timestamps

## Tech Stack

# Frontend

-> React.js

-> Axios

-> React Router

-> Plain CSS (no frameworks used)

-> Backend (for reference)

-> Node.js + Express

-> SQLite database

-> JWT authentication

## Installation

1️⃣ Clone the repository
git clone https://github.com/your-username/your-frontend-repo.git
cd your-frontend-repo

2️⃣ Install dependencies
npm install axios react-router-dom react-icons

3️⃣ Create .env file
REACT_APP_BASE_URL=http://localhost:4000

4️⃣ Start the development server
npm start

App runs on:
👉 http://localhost:3000

📁 Project Structure
src/
│── components/
│ ├── Products/
│ ├── ProductShort/
│ ├── ProductDetailCard/
│ ├── EnquiryForm/
│ ├── Enquiries/
│── services/
│── pages/
│── App.js
│── index.js
│── index.css

🔧 API Endpoints Used
Products
Method Endpoint Description
GET /products?search=&category=&page=&limit= Fetch all products
Enquiries
Method Endpoint Description
POST /enquiry/:product_id Submit enquiry
GET /enquiries Get all enquiries
Auth
Method Endpoint Description
POST /login Admin login

# Screens Included

✔ Product listing

✔ Product detail modal

✔ Enquiry form modal

✔ Admin enquiries dashboard

✔ Responsive navbar

✔ Filters UI

If you want, I can generate a README with embedded screenshots — just upload screenshots or ask for placeholders.
