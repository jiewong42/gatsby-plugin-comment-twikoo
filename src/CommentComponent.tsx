import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const CommentComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          commentPluginOptions {
            envId
          }
        }
      }
    }
  `);

  const { envId } = data.site.siteMetadata.commentPluginOptions;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/twikoo@1.6.32/dist/twikoo.all.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      window.twikoo.init({
        envId,
        el: '#tcomment',
        path: location.pathname ,
        lang: 'zh-CN',
      });
    };

    document.body.appendChild(script);
  }, [envId]);

  return <div id="tcomment"></div>;
};

export default CommentComponent;