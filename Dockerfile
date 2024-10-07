# Используем базовый образ Node.js
FROM node:18

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Открываем порт, который будет использоваться
EXPOSE 5173

# Собираем проект
RUN npm run build

# Команда для запуска приложения
CMD ["npm", "run", "dev"]