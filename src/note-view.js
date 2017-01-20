import React from 'react';

class NoteView extends React.Component {

  render() {
    return (
        <div className='note-container'>
          <textarea id="inputedVal" type="text" placeholder="This is input area. If you input markdown styled charactors, the right area displays html" defaultValue={ this.props.originVal} className="origin-area"  onKeyUp= { this.props.onKeyUp} />
          <div id="outputedVal" dangerouslySetInnerHTML={ this.props.translatedVal }  readOnly className="translated-area">
          </div>
        </div>
    );
  }
}

export default NoteView;
