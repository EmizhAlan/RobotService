# README (English)

## React + Vite Project

This project uses **React** with **Vite** for fast and efficient development. Hot Module Replacement (HMR) and ESLint rules are already configured for a smooth workflow.

### Available Plugins

* **@vitejs/plugin-react** – uses Babel (or oxc when using rolldown) for Fast Refresh.
* **@vitejs/plugin-react-swc** – uses SWC for Fast Refresh.

### React Compiler

The React Compiler is currently **not compatible** with SWC. You can follow the progress of this issue in the official repository.

---

## Running the Project

Before starting, please ensure **Node.js** is installed.

### 1. Install dependencies

Run the following command:

```
npm install
```

### 2. Install Vite

Vite must be installed for proper project operation.

Install Vite globally:

```
npm install -g vite
```

If you experience issues, install Vite and the React plugin locally:

```
npm install vite --save-dev
npm install @vitejs/plugin-react --save-dev
```

### 3. Start the development server

Run:

```
npm run dev
```

Your project will launch with hot reload enabled.

### 4. Build for production

To generate production-ready files:

```
npm run build
```

The compiled output will be available in the **dist** folder.

### 5. Preview the production build

Run:

```
npm run preview
```

Visit:

```
http://localhost:4173/
```

You will see your production version running locally.

---

# README (Русский)

## Проект React + Vite

Этот проект использует **React** и **Vite** для быстрой и удобной разработки. В проекте уже настроены Hot Module Replacement (HMR) и правила ESLint.

### Доступные плагины

* **@vitejs/plugin-react** – использует Babel (или oxc при использовании rolldown) для Fast Refresh.
* **@vitejs/plugin-react-swc** – использует SWC для Fast Refresh.

### React Compiler

На данный момент React Compiler **не совместим** с SWC. Отслеживать прогресс можно в официальном репозитории.

---

## Как запустить проект

Перед началом убедитесь, что у вас установлен **Node.js**.

### 1. Установка зависимостей

Выполните команду:

```
npm install
```

### 2. Установка Vite

Для корректной работы проекта Vite должен быть установлен.

Установите Vite глобально:

```
npm install -g vite
```

Если возникнут проблемы, установите Vite и плагин React локально:

```
npm install vite --save-dev
npm install @vitejs/plugin-react --save-dev
```

### 3. Запуск сервера разработки

Выполните:

```
npm run dev
```

Проект запустится с поддержкой горячей перезагрузки.

### 4. Сборка проекта для продакшена

Чтобы собрать проект:

```
npm run build
```

Готовые файлы появятся в папке **dist**.

### 5. Просмотр prod-версии

Запустите:

```
npm run preview
```

Перейдите по адресу:

```
http://localhost:4173/
```

Вы увидите вашу продакшен-сборку локально.
