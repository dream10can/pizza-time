import linkdin from "../images/linkedin.png";

function CreatedBy() {
  return (
    <div className="flex  items-center justify-center  mt-5">
      <p className="md:text-base lg:text-lg">created by dreamdev</p>
      <a
        href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
        className="cursor:pointer ml-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkdin} alt="linedin" />
      </a>
    </div>
  );
}

export default CreatedBy;
