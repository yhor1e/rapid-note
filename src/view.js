import React from 'react';

class RootView extends React.Component {

  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="widget-container">
          <a className="github-button" href="https://github.com/yhor1e/rapid-note" data-count-href="/yhor1e/rapid-note/stargazers" data-count-api="/repos/yhor1e/rapid-note#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star yhor1e/rapid-note on GitHub">Star</a>
          </div>
        </header>
        <div className='note-container'>
          <textarea id="inputedVal" type="text" placeholder="This is input area. If you input markdown styled charactors, the right area displays html" defaultValue={ this.props.originVal} className="origin-area"  onKeyUp= { this.props.onKeyUp} />
          <div id="outputedVal" dangerouslySetInnerHTML={ this.props.translatedVal }  readOnly className="translated-area">
          </div>
        </div>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default RootView;
