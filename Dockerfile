# Usa la imagen oficial de Node.js 14
FROM node:16

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install
# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 3000 en el contenedor
EXPOSE 3004

# Comando para ejecutar la aplicación
CMD ["npm", "start"]