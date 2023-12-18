# build environment
FROM node:20.9.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@5.0.1 -g
COPY . ./
ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL
ARG NGINX_CONF
ENV NGINX_CONF $NGINX_CONF
RUN CI='' npm run build 

# production environment
FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

COPY ./$NGINX_CONF /etc/nginx/conf.d/default.conf
COPY ./proxy.conf /etc/nginx/includes/proxy.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]