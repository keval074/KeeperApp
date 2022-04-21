import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);  
  }

  return (
    <div>
      <form>
        {isExpanded && 
        (<input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />)}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          rows={isExpanded ? 3 : 1}
          placeholder="Take a note"
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={submitNote}
            style={{
              backgroundColor: "#f5ba13",
              color: "white",
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
