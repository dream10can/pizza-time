import pizzaPic from "../images/pizza make.svg";

import garlicPic from "../images/garlic.png";

import Heading from "./heading";

import Article from "./article";

import Button from "./cta";

const heading = "مطعم بيتزا تايم  أجود انواع البيتزا الأطاليه";

const article =
  "يعد بيتزا تايم افضل مطعم بيتزا بالرياض بسبب التركيز الكبير على الجودة في كل التفاصيل. تتميز البيتزا التي يقدمها المطعم بالمكونات الطازجة والجودة العالية، مما يجعل الطعم لا يُضاهى. كما يولي المطعم اهتمام بالديكور والأجواء والخدمة السريعة والممتازة";

function Hero() {
  return (
    <main className="max-w-4xl mx-auto lg:max-w-6xl">
      <section
        className="flex flex-col justify-center items-center p-8 md:flex-row relative md:p-3 "
        id="hero"
      >
        <img
          src={pizzaPic}
          alt="pizza pic"
          className="w-80 h-80  mt-1 md:w-3/4 md:h-[365px] lg:w-4/5 lg:h-[450px]"
        />

        <div className="flex flex-col items-center">
          <Heading heading={heading} />
          <Article article={article} />
          <Button />
        </div>

        <img
          src={garlicPic}
          alt="garlic pic"
          className="absolute bottom-0 left-3 w-32 h-32  md:left-[645px] lg:w-48 lg:h-48 lg:left-[1000px]  "
        />
      </section>
    </main>
  );
}

export default Hero;
