// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-comment-twikoo',
      options: {
        envId: 'YOUR_ENV_ID',
        el: '#tcomment',
        path: window.location.pathname,
        lang: 'zh-CN',
      },
    },
  ],
};