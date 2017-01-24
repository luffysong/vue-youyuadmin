# youyu-admin

> YouYu backend

## Build Setup

``` bash
# install dependencies
npm install

# build dll
npm run dll

# serve with hot reload at localhost:10001
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



---

### 测试环境
- 测试环境hosts :
192.168.2.12    admintest07.corp.youyu.com    test07.youyu.com

- 例如：
http://admintest07.corp.youyu.com/api/movie


## Nginx 配置
server {
        listen       80;
        server_name  admin.local.youyu.com;

        location = /__webpack_hmr {
                proxy_set_header Connection '';
                chunked_transfer_encoding off;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_buffering off;
                proxy_cache off;
                proxy_redirect  off;
                proxy_pass              http://127.0.0.1:10001;
        }

        location  / {
                proxy_pass    http://127.0.0.1:10001;
                proxy_redirect    off;
                proxy_set_header  Host    $host;
                proxy_set_header  X-Real-IP  $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
        }
}

## Host 绑定
127.0.0.1 admin.local.youyu.com
