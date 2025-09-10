# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Set Node.js memory limit and install dependencies
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm install --legacy-peer-deps


# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
