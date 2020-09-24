# api-proxy

Nginx コンフィグ設定

## nginx.conf

`nginx.conf`ファイルの`http{}`の中に`include servers/*;`行を追加する。他の項目はデフォルトのままである。

```conf
# nginx.conf

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
    }

    include servers/*;
}
```

## servers/manager.conf

静的のファイルを使ってディプロイする：

```conf
# servers/manager.conf
server {
  listen 80;
  server_name a.test.com;

  location / {
    # htmlファイルのフォルダー
    root /usr/nginx/html/manager;
  }

  location /api {
    # api url
    proxy_pass https://manager.cars-enjoy.com;
  }
}
```

node serverを起動してディプロイする：

```conf
# servers/manager.conf
server {
  listen 80;
  server_name a.test.com;

  location / {
    # node server
    proxy_pass http://localhost:3001;
  }
}

```

## restart nginx

```bash
$ nginx -s reload
```

Page URL

```
http://a.test.com:9333/customer/
```