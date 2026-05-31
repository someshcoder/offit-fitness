# OFFFIT Fitness

OFFFIT is a women-only live fitness community project built with a React + Vite frontend and an Express backend API.

## Project structure

- `client/` - React frontend built with Vite, Tailwind CSS, and modern React hooks.
- `server/` - Express backend for API support and server-side functionality.

## Features

- React SPA using Vite for fast development and production builds
- Responsive fitness landing page with community and program sections
- Simple Node/Express backend for API or integration needs
- ESLint support in the client

## Getting Started

### Install dependencies

From the project root:

```bash
npm run install-all
```

### Run locally

Open two terminals and run:

```bash
npm run client
```

```bash
npm run server
```

Alternatively, the root `dev` script explains the setup and can be used as a reminder:

```bash
npm run dev
```

## Client commands

From `client/`:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Server commands

From `server/`:

```bash
npm run dev
npm start
```

## Technology stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Tooling: ESLint

## Notes

- The root package is configured as a private workspace container.
- Use separate terminals for the frontend and backend during local development.
