# SEARCH APP

Поисковик юзеров

## Содержание

- [Установка](#установка)
- [Запуск](#запуск)
- [API-эндпоинты](#api-эндпоинты)
- [Структура проекта](#структура-проекта)

## Установка

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/Ismail-1004/search-app
   cd server
   ```

2. Установите зависимости:
   ```
   npm install
   ```

## Запуск

Команды для запуска проекта:

### В режиме разработки

```sh
npm run dev
```

### API-эндпоинты

````markdown
## API-эндпоинты

### Пользователи

#### Поиск пользователя

- **URL:** `/api/users/search`
- **Метод:** `POST`
- **Описание:** Поиск пользователей по email и опционально по номеру телефона.
- **Тело запроса:**
  ```json
  {
    "email": "example@example.com",
    "number": "221122"
  }
  ```
````

## Ответ

Успех: Код 200, массив найденных пользователей.

```json
[
  {
    "email": "example@example.com",
    "number": "221122"
  }
]
```

Ошибка: Код 404, сообщение об ошибке.

```json
{
  "message": "Пользователь не найден"
}
```

### Структура проекта

Описание структуры папок и файлов проекта:

├── src
│ ├── controllers
│ │ └── usersController.ts
| |── error
| | └── ApiError.ts
│ ├── middleware
│ │ └── ErrorHandlingMiddleware.ts
    └── ValidationMiddleware.ts
│ ├── service
│ │ └── user-service.ts
│ ├── types
│ │ └── User.ts
│ ├── routes
  │  └── index.ts
│ │ └── users.ts
│ ├── users.json
│ ├── app.ts
├── package.json
└── README.md
