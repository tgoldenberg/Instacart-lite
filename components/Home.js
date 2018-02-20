import React, { Component } from 'react';

import Button from 'material-ui/RaisedButton';
import Wrapper from 'components/Wrapper';

export default class Home extends Component {
  render() {
    return (
      <Wrapper {...this.props} >
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%', zIndex: 0, background: 'rgba(0, 0, 0, 0.6)' }}>
          <img src="https://d2nkqaulr5muje.cloudfront.net/assets/applicants/landing_page/landing_page_bg-min-2dbf0751ab4e800d44d6981383d7ce4677046bf412bdc3fd41a822b3d18c1a0b.jpg" style={{ opacity: 0.5, position: 'absolute', width: '100%', bottom: 0 }}/>
          <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', zIndex: 1000 }}>
            <div className="flex-column" style={{ zIndex: 1000 }}>
              <h1>Instacart</h1>
            </div>
            <br />
            <section className="flex">
              <Button label="Apply Now" />
            </section>
          </section>
        </div>
      </Wrapper>
    )
  }
}
