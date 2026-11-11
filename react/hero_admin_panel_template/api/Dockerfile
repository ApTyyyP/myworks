FROM node:24-alpine
WORKDIR /app
COPY seed.json /app/seed.json
COPY seed.json /app/heroes.json
RUN npm install --global json-server@0.17
EXPOSE 3001
CMD ["json-server", "--watch", "heroes.json", "--host", "0.0.0.0", "--port", "3001"]
