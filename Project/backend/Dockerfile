# --- Use official Node.js image ---
FROM node:18-alpine

# --- Set working directory inside container ---
WORKDIR /app

# --- Copy package.json & package-lock.json first (for faster caching) ---
COPY package*.json ./

# --- Install dependencies ---
RUN npm ci --omit=dev

# --- Copy the rest of the backend source code ---
COPY . .

# Set environment to production
ENV NODE_ENV=production

# --- Expose backend port (adjust if different) ---
EXPOSE 5000

# --- Start the backend server ---
CMD ["node", "index.js"]
