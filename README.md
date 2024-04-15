# gatsby-plugin-comment-twikoo

这是一个Gatsby插件，用于在你的Gatsby网站中添加Twikoo评论系统。

## 安装

使用npm：

```bash
npm i gatsby-plugin-comment-twikoo 
```

或者使用yarn：

```bash
yarn add gatsby-plugin-comment-twikoo --ignore-workspace-root-check
```

## 配置

在你的`gatsby-config.js`文件中添加以下配置：

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-comment-twikoo',
      options: {
        envId: 'YOUR_ENV_ID', // 替换为你的Twikoo环境ID
      },
    },
    // 其他插件...
  ],
};
```

## 使用

在你的模板或页面中，你可以直接导入并使用`CommentComponent`：

```jsx
import CommentComponent from 'gatsby-plugin-comment-twikoo';

// 在模板中使用
<CommentComponent />
```

`CommentComponent`会自动初始化Twikoo评论系统，并将其添加到你的页面中。

## 注意事项

- [获取环境ID（envId）](https://twikoo.js.org/backend.html)。