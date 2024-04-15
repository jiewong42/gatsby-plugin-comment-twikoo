exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'gatsby-plugin-comment-twikoo': require.resolve('./CommentComponent.tsx'),
        },
      },
    });
  };