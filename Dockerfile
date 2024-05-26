# Utilise une image de base avec Node.js
FROM node:18 As developpement

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie le fichier package.json et le fichier package-lock.json (si présent)
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie tous les fichiers du projet dans le conteneur
COPY . .

# Compile le projet TypeScript
RUN npm run build

# Expose le port sur lequel l'application sera accessible
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
