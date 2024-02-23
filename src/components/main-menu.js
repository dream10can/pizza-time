function MainMenu({ handleClick }) {
  return (
    <div>
      {
        <button
          className="text-3xl cursor-pointer md:hidden text-[#422C1D]  mr-3 "
          onClick={handleClick}
        >
          &#9776;
        </button>
      }

      <nav
        className="hidden text-xl space-x-8 text-[#422C1D] font-Cairo md:block md:mr-8 lg:text-2xl "
        aria-label="main"
      >
        <a href="#menu" className="ml-8 md:hover:font-bold">
          المنيو
        </a>

        <a href="#vision" className="md:hover:font-bold">
          رؤيوتنا
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
          className="md:hover:font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          تواصل معنا
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
          className="md:hover:font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          احجز طاولتك
        </a>
      </nav>
    </div>
  );
}

export default MainMenu;
