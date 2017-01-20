import React from 'react';
import HeaderView from './header-view.js';
import FooterView from './footer-view.js';

class RootView extends React.Component {

  render() {
    return (
      <div className="container">
        <HeaderView />
        <div className='note-container'>
          <textarea id="inputedVal" type="text" placeholder="This is input area. If you input markdown styled charactors, the right area displays html" defaultValue={ this.props.originVal} className="origin-area"  onKeyUp= { this.props.onKeyUp} />
          <div id="outputedVal" dangerouslySetInnerHTML={ this.props.translatedVal }  readOnly className="translated-area">
          </div>
        </div>
        <FooterView />
      </div>
    );
  }
}

export default RootView;
