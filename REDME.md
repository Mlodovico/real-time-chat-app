# Go Real-Time Chat App

This repository contains a real-time chat application built with **Go** on the backend and **React** on the frontend. The main objective is to implement WebSocket communication and explore concurrent programming in Go. Users can join rooms, send messages in real-time, and interact with other connected users.

## Table of Contents
 - [Project Setup](#project-setup)
 - [WebSocket Server](#websocket-server)
 - [Frontend Setup](#frontend-setup)
 - [Dependencies](#dependencies)
 - [Language](#language)
 - [License](#license)

---

## Project Setup

### Clone the repository
```sh
git clone https://github.com/your-user/go-realtime-chat-app.git
cd go-realtime-chat-app
```

---

## WebSocket Server

### Run the Go backend

```sh
cd backend
go mod tidy
go run main.go
```

The WebSocket server will run on `ws://localhost:8080/ws`.

---

## Frontend Setup

### Install dependencies

```sh
cd frontend
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The frontend will run on `http://localhost:5173` (or your Vite port).

---

## Dependencies

- **Go**
- **React**
- **WebSockets**
- **Docker** (optional)
- **PostgreSQL** or **SQLite** (optional)
- **TailwindCSS** (for styling)
- **Vite**

---

## Language

- Go
- TypeScript
- JavaScript (React)
- HTML/CSS

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

