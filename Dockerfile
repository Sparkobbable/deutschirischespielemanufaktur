# build environment
FROM node:14.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@5.0.1 -g
COPY . ./
RUN CI='' npm run build 

# production environment
FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./proxy.conf /etc/nginx/includes/proxy.conf

EXPOSE 82
CMD [ "ngixn", "-g", "daemon off;" ]