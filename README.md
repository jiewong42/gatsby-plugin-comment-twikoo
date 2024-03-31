# gatsby-plugin-comment-twikoo
twikoo.js for gatsby
## 使用方法：
```
npm i gatsby-plugin-comment-twikoo 
```
或者
```
yarn add gatsby-plugin-comment-twikoo
```
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

在你要添加的地方：
```
import Comment from 'gatsby-plugin-comment-twikoo';//导入组件
<Comment> //使用组件

```


