# SupaAuth – Next.js Authentication System

## Project Overview

**SupaAuth** is a secure, production-ready authentication system built with:

* **Next.js (App Router)**
* **Supabase Authentication**
* **Tailwind CSS**
* **Vercel**

It supports **email & password authentication**, **session persistence**, **protected routes**, and **password recovery**, implemented using **server-side Supabase session handling** and **Next.js middleware-style request interception**.

This project follows real-world best practices and is designed to be clean, extensible, and deployment-ready.

---

## Features

* Email + Password Signup
* Email + Password Login
* Email verification flow
* Persistent auth sessions (across reloads)
* Secure Logout
* Forgot password & update password flows
* Protected routes (authenticated users only)
* Auth routes blocked for logged-in users
* Server-side session validation using Supabase SSR
* Clean UI with Tailwind CSS (dark mode supported)
* Deployed on Vercel

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Authentication:** Supabase Auth
* **Styling:** Tailwind CSS + shadcn/ui
* **Forms & Validation:** React Hook Form + Zod
* **Session Handling:** Supabase SSR
* **Deployment:** Vercel
* **Version Control:** GitHub

---

## Folder Structure

```
.
├── app
│   ├── auth
│   │   ├── login
│   │   ├── sign-up
│   │   ├── sign-up-success
│   │   ├── forgot-password
│   │   └── update-password
│   ├── protected
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   ├── login-form.tsx
│   ├── sign-up-form.tsx
│   ├── logout-button.tsx
│   ├── auth-button.tsx
│   └── theme-switcher.tsx
├── lib
│   └── supabase
│       ├── client.ts
│       ├── server.ts
│       └── proxy.ts
├── proxy.ts
├── .env.example
├── README.md
└── package.json
```

---

## Authentication Flow

### Signup

1. User signs up using email, password, and name
2. Client-side validation with Zod
3. Supabase creates the user
4. Verification email is sent
5. User is redirected to `/auth/sign-up-success`

---

### Login

1. User logs in with email & password
2. Supabase validates credentials
3. Session cookies are set
4. Session persists across reloads
5. User is redirected to `/protected`

---

### Logout

1. Supabase session is cleared
2. Cookies are removed
3. User is redirected to `/auth/login`

---

### Forgot / Update Password

* Users can request a password reset email
* Reset link redirects to `/auth/update-password`
* New password is securely updated via Supabase

---

## Route Protection Strategy

This project uses **server-side session checks** via Supabase SSR.

### How it works

* Requests are intercepted using `proxy.ts`
* Supabase session is validated on every request
* Unauthenticated users are redirected to `/auth/login`
* Authenticated users are blocked from accessing auth pages

This ensures:

* No flash of unauthenticated content
* No client-only auth checks for protected routes

---

## Routes & Access Rules

| Route                   | Access                        |
| ----------------------- | ----------------------------- |
| `/auth/login`           | Public (blocked if logged in) |
| `/auth/sign-up`         | Public (blocked if logged in) |
| `/auth/forgot-password` | Public                        |
| `/auth/update-password` | Public (token-based)          |
| `/protected`            | Authenticated only            |
| `/`                     | Redirects based on auth state |

---

## Environment Variables

Create a `.env.local` file based on the example below.

### `.env.example`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

---

## Local Development Setup

### 1. Clone the Repository

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials.

---

### 4. Run the Development Server

```bash
npm run dev
```

Open:
`http://localhost:3000`

---

## Supabase Setup

1. Create a project at [https://supabase.com](https://supabase.com)
2. Enable **Email / Password authentication**
3. Configure:

   * Email confirmations (recommended)
   * Redirect URLs for auth
4. Copy:

   * Project URL
   * Anon Public Key
5. Add them to `.env.local` and Vercel environment variables

---

## Deployed Application

**Live URL:**
👉 `https://your-vercel-app.vercel.app`
