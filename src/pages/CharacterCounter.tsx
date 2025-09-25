import { useState, useMemo, useEffect, useRef } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target;
    setText(el.value);

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 400);

    return () => clearTimeout(handler);
  }, [text]);

  const { charCount, wordCount, readingTime } = useMemo(() => {
    console.log("Recalculating...");

    const charCount = debouncedText.length;
    const wordCount = debouncedText.trim()
      ? debouncedText.trim().split(/\s+/).length
      : 0;
    const readingTime = (wordCount / 200).toFixed(2);

    return { charCount, wordCount, readingTime };
  }, [debouncedText]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Character Counter Tool</h2>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        placeholder="Start typing your text here..."
        className="w-full border rounded-md p-3 text-base resize-none overflow-hidden"
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
          <p className="text-lg">{readingTime} min</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;
