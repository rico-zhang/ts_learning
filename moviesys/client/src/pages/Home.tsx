import React, { ReactNode } from 'react';

export default class Home extends React.Component {
  render(): ReactNode {
    console.log(this.props);
    return <h1>首页</h1>;
  }
}
