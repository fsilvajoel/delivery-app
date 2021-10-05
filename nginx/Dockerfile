FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./my_nginx.conf /etc/nginx/sites-available/

RUN mkdir -p /etc/nginx/sites-enabled/\
    && ln -s /etc/nginx/sites-available/my_nginx.conf /etc/nginx/sites-enabled/

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ] 