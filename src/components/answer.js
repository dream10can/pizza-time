import { useState } from "react";

function Answer({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" flex flex-row-reverse justify-between items-center mt-8 pr-5 pl-5 lg:mt-12">
        <h2 className="self-right font-Cairo lg:text-2xl"> {question}</h2>
        <button
          onClick={() => {
            setIsOpen((isOpen) => setIsOpen(!isOpen));
          }}
          className="text-2xl cursor-pointer"
        >
          {isOpen ? (
            <p className="text-2xl lg:text-3xl">&#8595;</p>
          ) : (
            <p className="text-2xl lg:text-3xl">&#8593;</p>
          )}
        </button>
      </div>
      {isOpen && (
        <p className="text-right p-5 font-Cairo lg:text-base ">{answer}</p>
      )}
    </>
  );
}

export default Answer;
