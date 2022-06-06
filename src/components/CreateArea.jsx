import React, { useState } from "react";

export default function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(inputText);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button
          type="submit"
          onClick={() => {
            props.onAdd(inputText);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
