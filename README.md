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
  siteMetadata: {
    // 其他配置...
    commentPluginOptions: {
      envId: "",},
    // 其他配置...
  }
};
```
### 参考配置
在[gatsby-starter-blog](/https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/)使用，修改 gatsby-config.js ：
```js
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    commentPluginOptions: {
      envId: "",},//在此添加配置
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    //其他插件...
  ]
}

```
## 使用

在你的模板或页面中，你可以直接导入并使用`CommentComponent`：

```jsx
import CommentComponent from 'gatsby-plugin-comment-twikoo';

// 在模板中使用
<CommentComponent />
```

`CommentComponent`会自动初始化Twikoo评论系统，并将其添加到你的页面中。
### 使用参考
在[gatsby-starter-blog](/https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/)使用，只需到添加上述两行代码：
```js
import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommentComponent from 'gatsby-plugin-comment-twikoo';//导入


const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <CommentComponent />  //使用
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`


```

## 注意事项

- [获取环境ID（envId）](https://twikoo.js.org/backend.html)。