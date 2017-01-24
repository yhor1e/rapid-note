import React from 'react';

class NoteView extends React.Component {

  render() {

    return (
      <div className='note-container'>
        <textarea id="plain-area" type="text" className="plain-area"
                  placeholder="This is input area. If you input markdown styled charactors, the right area displays html"
                  defaultValue={ this.props.plain}
                  onKeyUp= { this.props.onKeyUp} />
        <div id="html-area"
             readOnly
             dangerouslySetInnerHTML={ this.props.html }
             className="html-area">
        </div>
      </div>
    );
  }
}

export default NoteView;
