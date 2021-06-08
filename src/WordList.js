function WordList({words}) {
  return (
      <ul className="WordList">
        {words.map(word => (
        <li key={word}>{word}</li>
        ))}
      </ul>
  );
}

export default WordList;