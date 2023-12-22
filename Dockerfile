# Usa la imagen oficial de Node.js 14
FROM node:16

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
COPY tsconfig*.json ./

# Instala las dependencias
RUN npm install
# Copia el resto de los archivos de la aplicación
COPY . .
RUN npm run build
# Compila la aplicación (si estás utilizando TypeScript)
# RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]