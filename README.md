AgriTech
Это монорепозиторий, содержащий бэкенд на FastAPI и фронтенд на React. Проект можно запустить локально или с помощью Docker Compose, чтобы поднять оба сервиса одновременно.
Требования
Убедитесь, что установлены:

Node.js (версия 16 или выше) и npm для фронтенда.
Python (версия 3.8 или выше) для бэкенда.
Docker и Docker Compose (для запуска через Docker).

Структура проекта

/backend: Бэкенд на FastAPI.
/frontend: Фронтенд на React.
/docker-compose.yml: Конфигурация для запуска сервисов через Docker.

Установка и запуск
Вариант 1: Локальный запуск
Фронтенд

Перейдите в папку фронтенда:cd frontend


Установите зависимости:npm install


Запустите сервер разработки:npm run dev


Откройте фронтенд в браузере:http://localhost:5173/



Бэкенд

Перейдите в папку бэкенда:cd backend


Создайте и активируйте виртуальное окружение:
На Windows:python -m venv venv
.\venv\Scripts\activate


На macOS/Linux:python -m venv venv
source venv/bin/activate




Установите зависимости:pip install fastapi uvicorn

Если есть requirements.txt, выполните:pip install -r requirements.txt


Запустите сервер FastAPI:uvicorn main:app --reload


Бэкенд будет доступен по адресу:http://localhost:8000/



Вариант 2: Запуск через Docker Compose

Находясь в корневой папке проекта, выполните:docker-compose up --build


Доступ к сервисам:
Фронтенд: http://localhost:3000/
Бэкенд: http://localhost:8000/



Остановка приложения

Для локального запуска нажмите Ctrl+C в терминале.
Для Docker Compose выполните:docker-compose down



Примечания

Убедитесь, что порты 3000, 5173 и 8000 свободны перед запуском.
Если команда uvicorn не работает, убедитесь, что она установлена (pip install uvicorn) и активировано виртуальное окружение.
При возникновении проблем проверьте версию Python (python --version) и правильность пути к файлу main.py.
