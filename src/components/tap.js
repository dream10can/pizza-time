function Tap({ num, activeTap, onClick, name }) {
  return (
    <button
      className={`w-23 h-10 border border-[#ff9d2e] p-2 text-center rounded-md lg:w-32 lg:h-14 ${
        activeTap === num && "transition  duration-700 ease-in bg-[#ff9d2e]"
      }`}
      onClick={() => onClick(num)}
    >
      {name}
    </button>
  );
}

export default Tap;
