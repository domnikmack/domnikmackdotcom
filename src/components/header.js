import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: 'white',
          margin: '0 auto',
          padding: '0.7rem 0',
          webkitBoxShadow: '0px 0px 10px rgba(0,0,0,.2)',
          mozBoxShadow: '0px 0px 10px rgba(0,0,0,.2)',
          boShadow: '0px 0px 10px rgba(0,0,0,.2)',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 30px',
          }}
        >
          {this.props.children}
        </div>
      </header>
    );
  }
}
