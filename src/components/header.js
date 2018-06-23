import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {headerShadowOn: false};
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      console.log(window.scrollY);
      this.setState({headerShadowOn: true});
      if (!window.scrollY) {
        this.setState({headerShadowOn: false});
      }
    });
  }

  render() {
    let headerBoxShadow = {

      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255,255,255,.95)',
      margin: '0 auto',
      padding: '0.7rem 0',
      zIndex: 1000,
      // borderBottom: '1px lightgrey solid',
      transition: 'box-shadow, .4s',
    };

    if (this.state.headerShadowOn) {
      headerBoxShadow.WebkitBoxShadow = '0px 0px 10px rgba(0,0,0,.4)';
      headerBoxShadow.MozBoxShadow = '0px 0px 10px rgba(0,0,0,.4)';
      headerBoxShadow.BoxShadow = '0px 0px 10px rgba(0,0,0,.4)';
      }


    return (
      <header style={headerBoxShadow}>
        <div
          style={{
            // maxWidth: '98%',
            margin: '0 auto',
            padding: '0 30px'
          }}
        >
          {this.props.children}
        </div>
      </header>
    );
  }
}
