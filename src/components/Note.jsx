import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}



Note.defaultProps = {
  title: 'Add title',
  note: 'take a note...'
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Note;
