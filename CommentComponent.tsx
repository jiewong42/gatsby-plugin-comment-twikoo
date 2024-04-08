import React, { Component } from 'react';

interface CommentComponentProps {
  pageContext: {
    options: {
      envId: string;
    };
  };
}

class CommentComponent extends Component<CommentComponentProps> {
  componentDidMount() {
    const { envId } = this.props.pageContext.options

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
  }

  render() {
    return <div id="tcomment"></div>;
  }
}

export default CommentComponent;