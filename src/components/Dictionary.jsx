import { useState } from "react";

const Dictionary = () => {
  const DictionaryWord = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [input, setInput] = useState("");
  const [searchitem, setSearchitem] = useState("");
  const searchword = () => {
    const wordSearch = DictionaryWord.find(
      (item) => item.word.toLowerCase() === input.toLowerCase()
    );
    if (wordSearch) {
      setSearchitem(wordSearch.meaning);
    } else {
      setSearchitem("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={searchword}>Search</button>
      <h4>Definition:</h4>
      <div>{searchitem}</div>
    </div>
  );
};

export default Dictionary;