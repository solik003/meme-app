# Project Name

A full-stack web application built with Next.js, React, Tailwind CSS, and MongoDB. Deployed on Railway with environment variables for secure configuration.

## Tech Stack

- [Next.js](https://nextjs.org/) – React Framework
- [React](https://reactjs.org/) – Frontend Library
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS Framework
- [MongoDB](https://www.mongodb.com/) – NoSQL Database
- [Heroicons](https://heroicons.com/) – Beautiful hand-crafted SVG icons
- [Railway](https://railway.app/) – Deployment platform
- [react-hook-form](https://react-hook-form.com/) – Form handling library

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
npm install

This project uses environment variables to securely connect to MongoDB and other services.

On Railway:
    1. Open your project in Railway.

    2. Go to the Variables tab.

    3. Add the required environment variables, for example:

MONGODB_URI=your-mongo-db-connection-string
NEXTAUTH_SECRET=your-auth-secret

Locally:
Create a .env.local file in the root of your project:

MONGODB_URI=your-mongo-db-connection-string
NEXTAUTH_SECRET=your-auth-secret

Next.js automatically loads environment variables from .env.local.

Run the app

npm run dev       

Folder Structure

```bash
.
├── api/            # API routes (Next.js API or MongoDB logic)
├── components/     # Shared React components (buttons, modals, etc.)
├── hooks/          # Custom React hooks
├── libs/           # Utility functions (e.g., DB connection)
├── list/           # List UI logic/components
├── models/         # Mongoose models
├── table/          # Table components or logic
├── types/          # TypeScript types
└── .env.local      # Local environment variables