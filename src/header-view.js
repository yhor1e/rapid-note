import React from 'react';

class HeaderView extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="widget-container">
          <a className="github-button" href="https://github.com/yhor1e/rapid-note" data-count-href="/yhor1e/rapid-note/stargazers" data-count-api="/repos/yhor1e/rapid-note#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star yhor1e/rapid-note on GitHub">Star</a>
        </div>
      </header>
    );
  }
}

export default HeaderView;
