# ===== Build stage =====
FROM node:20-alpine as build
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./
RUN npm install

# Копируем весь фронт
COPY . .



# Собираем проект
RUN npm run build

# ===== Production stage =====
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
