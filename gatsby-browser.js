// gatsby-browser.js
import React from 'react';
import CommentComponent from './CommentComponent';

export const wrapRootElement = ({ element }, pluginOptions) => (
  <>
    {element}
    <CommentComponent options={pluginOptions} />
  </>
);