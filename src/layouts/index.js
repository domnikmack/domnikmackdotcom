import React from 'react';
import Header from '../components/header';

export default ({ children }) =>
      <div
        style={{
          margin: 0
        }}
      >
        <Header>
          <h3
            style={{
              margin: 0
            }}
          >
            Domnik Mack
          </h3>
        </Header>
        <div
          className="container"
          style={{
            maxWidth: '800px',
            margin: '70px auto 0 auto',
            padding: '0 30px'
          }}
        >
          { children() }
        </div>
      </div>

