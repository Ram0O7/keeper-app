import React from "react";
import { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }

    function handleChange(e) {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
      <div>
        <form>
          <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
          <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
          <button onClick={submitNote}>Add</button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;
  