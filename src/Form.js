const {useState} = require("react");

function Form({tryWord}) {
  const [word, setWord] = useState("");
  console.log("* Form", word);

  function handleChange(evt) {
    setWord(evt.target.value.toUpperCase());
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    tryWord(word);
    setWord("");
  }

  return (
      <form className="Form" onSubmit={handleSubmit}>
        <input value={word} onChange={handleChange} />
      </form>
  )
}

export default Form;