# gatsby-plugin-comment-twikoo
twikoo.js for gatsby
## 使用方法：
```
npm i gatsby-plugin-comment-twikoo 
```
或者
```
yarn add gatsby-plugin-comment-twikoo --ignore-workspace-root-check
```
配置 gatsby-config.js：
```
resolve: 'gatsby-plugin-comment-twikoo',
      options: {
        envId: 'YOUR_ENV_ID',
      },
```
为了传递 envId 这个参数，定义了一个 变量 pluginOptions 并传递
配置 gatsby-node.js:
```
const pluginOptions = require('./gatsby-config').plugins.find(
  (plugin) => plugin.resolve === 'gatsby-plugin-comment-twikoo'
).options;

//找到 createPage() 添加 options: pluginOptions,

createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          options: pluginOptions,
        },
      })


```
在 post 模板中添加 pageContext，传递参数
```
const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
  pageContext,
})

```

在你要添加的地方：
```
import CommentComponent from "gatsby-plugin-comment-twikoo"

<CommentComponent pageContext={pageContext} /> //使用组件

```

保存了在 gatsby-starter-blog 入门博客上修改的 三个文件。已测试