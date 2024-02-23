import CreatedBy from "./created-by";

function MobileMenu({ isActive, handleClick }) {
  return (
    isActive && (
      <section
        className={" bg-white w-full absolute top-0 flex flex-col min-h-screen"}
      >
        <button
          className={`self-end  text-black text-3xl mr-3 mt-5`}
          onClick={handleClick}
        >
          {" "}
          &#10005;
        </button>
        <nav
          className="flex flex-col items-center text-black font-Cairo gap-5 text-2xl 
                py-9"
          aria-label="mobile-main"
        >
          <a href="#menu" onClick={handleClick}>
            المنيو
          </a>
          <a href="#vision" onClick={handleClick}>
            رؤيوتنا
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            تواصل معنا
          </a>
          <a
            onClick={handleClick}
            href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            احجز طاولتك
          </a>
          <CreatedBy />
        </nav>
      </section>
    )
  );
}

export default MobileMenu;
