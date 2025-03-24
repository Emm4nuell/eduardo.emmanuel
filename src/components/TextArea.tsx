import { useState } from "react";

const TextArea = () => {
  const [charCount, setCharCount] = useState(200);
  const [status, setStatus] = useState(false);

  function handlerText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const remainingChars = 200 - event.target.value.length;
    setCharCount(remainingChars);
    setStatus(remainingChars < 15);
  }

  return (
    <div className="flex flex-col gap-1">
      <textarea
        title="Sua mensagem"
        className="bg-black/30 rounded-[6px] p-1 w-full h-30 resize-none"
        onChange={handlerText}
        maxLength={200}
      />
      <div className="flex justify-end">
        <p className={` text-sm  ${status ? "text-red-500" : "text-white"}`}>
          {charCount}
        </p>
      </div>
    </div>
  );
};

export default TextArea;
