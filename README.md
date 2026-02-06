# Next.js Authentication System (Supabase + Tailwind)

## Project Overview

This project is a **secure, production-ready authentication system** built using:

* **Next.js (App Router)**
* **Supabase Authentication**
* **Tailwind CSS**
* **Vercel for deployment**

It supports **email & password signup, login, logout**, and **session-based route protection** using Supabase sessions and Next.js middleware.

The application follows clean architecture, secure environment variable handling, and industry-standard best practices.

---

## Features

* Email + Password Signup
* Email + Password Login
* Persistent authentication sessions
* Secure Logout
* Protected routes (authenticated users only)
* Public routes (`/login`, `/signup`)
* Auth pages inaccessible when logged in
* Server-side session checks using Next.js middleware
* Clean, minimal UI with Tailwind CSS
* Deployed on Vercel
* Version-controlled with GitHub

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Auth Provider:** Supabase Auth
* **Deployment:** Vercel
* **Version Control:** GitHub

---

## Folder Structure

```
.
├── app
│   ├── login
│   ├── signup
│   ├── dashboard (protected)
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── AuthForm.tsx
│   └── Navbar.tsx
├── lib
│   └── supabase
│       ├── client.ts
│       └── server.ts
├── middleware.ts
├── styles
├── .env.example
├── README.md
└── package.json
```

---

## Authentication Flow

### Signup

1. User signs up using email and password
2. Client-side validation runs before submission
3. Supabase creates the user
4. User is redirected after successful signup
5. Errors are handled and displayed properly

### Login

1. User logs in using email and password
2. Supabase validates credentials
3. Session is stored securely
4. Session persists across page reloads
5. User is redirected to protected content

### Logout

1. Supabase session is cleared
2. User is redirected to `/login`
3. Protected routes become inaccessible

---

## Route Protection Strategy

* **Middleware (`middleware.ts`)** is used to:

  * Protect authenticated routes
  * Prevent logged-in users from accessing `/login` and `/signup`
* Authentication state is verified **server-side**
* No client-only auth checks for protected routes

---

## Pages

| Route        | Access                        |
| ------------ | ----------------------------- |
| `/login`     | Public (blocked if logged in) |
| `/signup`    | Public (blocked if logged in) |
| `/dashboard` | Protected                     |
| `/`          | Protected or redirected       |

---

## Environment Variables

Create a `.env.local` file using the example below.

### `.env.example`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> ⚠️ Never commit real environment variables to GitHub.

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials.

### 4. Run the Development Server

```bash
npm run dev
```

Visit:
`http://localhost:3000`

---

## Supabase Setup

1. Create a project at [https://supabase.com](https://supabase.com)
2. Enable **Email / Password authentication**
3. Copy:

   * Project URL
   * Anon Public Key
4. Add them to `.env.local` and Vercel environment variables

---

## Deployed Application

**Live URL:**
👉 `https://supa-auth-alpha.vercel.app`

---
