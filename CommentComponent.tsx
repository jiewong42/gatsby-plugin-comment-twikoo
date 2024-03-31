import React, { Component } from 'react';

class CommentComponent extends Component {
  componentDidMount() {
    const { envId, el, path, lang } = this.props.options;

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/twikoo@1.6.32/dist/twikoo.all.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      window.twikoo.init({
        envId,
        el,
        path,
        lang,
      });
    };

    document.body.appendChild(script);
  }

  render() {
    return <div id="tcomment"></div>;
  }
}

export default CommentComponent;