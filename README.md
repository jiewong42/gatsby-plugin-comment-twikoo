# gatsby-plugin-comment-twikoo
twikoo.js for gatsby
## 使用方法：
配置 gatsby-config.js：
```
resolve: 'gatsby-plugin-comment-twikoo',
      options: {
        envId: 'YOUR_ENV_ID',
        el: '#tcomment',
        path: window.location.pathname,
        lang: 'zh-CN',
      },
```