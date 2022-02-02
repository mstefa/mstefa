FROM nginx:1.21.1
WORKDIR /usr/share/nginx/html
COPY ./build ./ 
# Revisar el copy esta compiando toda la carpeta a /html/build