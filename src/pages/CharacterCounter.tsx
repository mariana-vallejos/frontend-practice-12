import { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingTime = () => { 
    console.log('render')
    return (wordCount / 200).toFixed(2);}

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Character Counter Tool</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your text here..."
        className="w-full h-48 border rounded-md p-3 text-base"
      />

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-gray-100 rounded-md">
          <h4 className="font-semibold">Characters</h4>
          <p className="text-lg">{charCount}</p>
        </div>
        <div className="p-3 bg-gray-100 rounded-md">
          <h4 className="font-semibold">Words</h4>
          <p className="text-lg">{wordCount}</p>
        </div>
        <div className="p-3 bg-gray-100 rounded-md">
          <h4 className="font-semibold">Reading Time</h4>
          <p className="text-lg">{readingTime()} min</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;
