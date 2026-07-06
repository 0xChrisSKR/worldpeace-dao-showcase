FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html
COPY . .
RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  server_name _;' \
  '  charset utf-8;' \
  '  root /usr/share/nginx/html;' \
  '  autoindex on;' \
  '  autoindex_exact_size off;' \
  '  autoindex_localtime on;' \
  '  location / { try_files $uri $uri/ =404; }' \
  '}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
