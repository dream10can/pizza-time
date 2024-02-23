import CreatedBy from "./created-by";

function Footer() {
  return (
    <section className="bg-[#ff9d2e] ">
      <div className=" grid grid-cols-2  gap-2 p-5 justify-items-center font-Cairo mt-10 text-base md:text-[20px] lg:max-w-lg m-auto lg:text-2xl  ">
        <a href="#menu" className="mt-2 lg:mb-3">
          المنيو
        </a>

        <a href="#vision" className="mt-2 lg:mb-3">
          رؤيوتنا
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
          className="mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          تواصل معنا
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-faisal-%E2%80%8B%F0%9F%92%BB%E2%80%8B-570203206/"
          className="mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          احجز طاولتك
        </a>
      </div>

      <div className="p-2 text-center">
        <h2 className="text-center text-base font-Cairo md:text-[20px] lg:text-2xl">
          الموقع
        </h2>
        <p className="mt-2 text-sm md:text-base lg:text-lg">
          مطعم بيتزا تايم شارع انس بن مالك الرياض مقابل ستاربكس
        </p>
      </div>

      <CreatedBy />
    </section>
  );
}

export default Footer;
