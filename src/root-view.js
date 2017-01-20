import React from 'react';
import HeaderView from './header-view.js';
import FooterView from './footer-view.js';
import NoteView from './note-view.js';

class RootView extends React.Component {

  render() {
    return (
      <div className="container">
        <HeaderView />
        <NoteView
           originVal={ this.props.originVal}
           onKeyUp={ this.props.onKeyUp}
           translatedVal={ this.props.translatedVal }/>
        <FooterView />
      </div>
    );
  }
}

export default RootView;
