import React, { useState } from "react";

function CreateArea(props) {
  const [updateNote, setUpdateNote] = useState({
    title: "",
    content: ""
  });

  const takeNote = (e) => {
    const { name, value } = e.target;
    setUpdateNote((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };
  const clickHandle = (e) => {
    props.onAdd(updateNote);
    setUpdateNote({
      title: "",
      content: ""
    })
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={clickHandle}>
        <input name="title" placeholder="Title" onChange={takeNote} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={takeNote}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
