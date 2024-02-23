import logo from "../images/pizza time logo.png";
import MobileMenu from "./mobile-menu";
import MainMenu from "./main-menu";
import { useState } from "react";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((isActive) => !isActive);
  }
  return (
    <header className=" sticky top-0 z-10 bg-[#ff9d2e]">
      <section className="max-w-4xl flex justify-between items-center md:max-h-20 lg:max-h-20 ">
        <img src={logo} alt="logo" className="w-20 h-20 md:w-28 md:h-28  " />

        <MainMenu handleClick={handleClick} />
      </section>
      <MobileMenu isActive={isActive} handleClick={handleClick} />
    </header>
  );
}

export default NavBar;
