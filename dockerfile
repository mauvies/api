FROM node:latest AS server-build

ARG API_URL=https://api.github.com
ARG PORT=5000

ENV API_URL=$API_URL
ENV PORT=$PORT

WORKDIR /usr/src/app
COPY . ./api/
RUN cd api && npm install && npm run build

EXPOSE 5000
CMD ["node", "/usr/src/app/api/dist/index.js"]