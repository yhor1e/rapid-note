import React from 'react';

class NoteView extends React.Component {

  render() {

    return (
      <div className='note-container'>
        <textarea id="raw-area" type="text" className="raw-area"
                  placeholder="This is input area. If you input markdown styled charactors, the right area displays html"
                  defaultValue={ this.props.raw}
                  onKeyUp= { this.props.onKeyUp} />
        <div id="outputedVal"
             readOnly
             dangerouslySetInnerHTML={ this.props.html }
             className="html-area">
        </div>
      </div>
    );
  }
}

export default NoteView;
