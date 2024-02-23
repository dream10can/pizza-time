import Heading from "./heading";

import Card from "./card";

//pizza Name
import paporoniPizza from "../images/paporoni pizza-min.png";
import spicyImage from "../images/veg-pizza.png";
import beefPizza from "../images/beefPizza.png";
import DecorationImage from "./decoration-image";

//decoration image
import onion from "../images/onion.png";
import onegarlic from "../images/onegarlic.png";
import checkenPizza from "../images/checken_pizza.png";
import leavImage from "../images/leav.png";
import garlic from "../images/garlic.png";
import AboutUs from "./about-us";

const heading = "أفضل بيتزا لدينا";

const cardInformation = [
  {
    pizzaName: "بيتزا البيبروني",
    cardDescription:
      "بيتزا البيبروني من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
    cardPrize: 89,
    image: paporoniPizza,
  },
  {
    pizzaName: "بيتزا الدجاج",
    cardDescription:
      "مزيجنا الشهير من الفلفل الأخضر، الفطر، البصل، الزيتون الأسود والطماطم محملة على قاعدة الطماطم ومغطاة بجبنة",
    cardPrize: 77,
    image: spicyImage,
  },

  {
    pizzaName: "بيتزا اللحم",
    cardDescription:
      "ااشهر خليط من اللحم البقر والفلفل الحار والبصل والطماطم واوريجانو مع صلصة الطماطم ",
    cardPrize: 69,
    image: beefPizza,
  },
  {
    pizzaName: "بيتزا الخضار",
    cardDescription:
      "أشهر خليط من مكعبات الدجاج والفلفل الحار والبصل والطماطم واوريجانا",
    cardPrize: 99,
    image: checkenPizza,
  },
];

const decorationInfo = [
  {
    image: onion,
    altName: "onion",
    className: "image-decoration",
  },
  {
    image: onegarlic,
    altName: "onegarlic",
    className: "single-garlic",
  },
  {
    image: leavImage,
    altName: "leav",
    className: "leav-decoration",
  },

  {
    image: garlic,
    altName: "garlic",
    className:
      "absolute inset-y-96 left-0 w-32 h-32 lg:w-48 lg:h-48 lg:left-40",
  },
];

function SpecialDish() {
  return (
    <>
      <section className="flex flex-col bg-[#101A24] bg-opacity-5 items-center relative  ">
        <Heading heading={heading} />

        <div className="md:grid grid-cols-2 md:gap-8 p-2">
          {cardInformation.map((cardInformation) => {
            return (
              <Card
                pizzaName={cardInformation.pizzaName}
                cardDescription={cardInformation.cardDescription}
                cardPrize={cardInformation.cardPrize}
                image={cardInformation.image}
                key={cardInformation.pizzaName}
              />
            );
          })}
        </div>

        {decorationInfo.map((decorationInfo) => {
          return (
            <DecorationImage
              image={decorationInfo.image}
              altName={decorationInfo.altName}
              className={decorationInfo.className}
              key={decorationInfo.altName}
            />
          );
        })}
      </section>
      <AboutUs />
    </>
  );
}

export default SpecialDish;
