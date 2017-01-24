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
           plain={ this.props.plain}
           onKeyUp={ this.props.onKeyUp}
           html={ this.props.html }/>
        <FooterView />
      </div>
    );
  }
}

export default RootView;
