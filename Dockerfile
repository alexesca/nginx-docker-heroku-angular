FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY /dist/ng-cors /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
