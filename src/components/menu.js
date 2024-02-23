import { useState } from "react";
import Tap from "./tap";
import CardMenu from "./cardMenu";

//pizza paporoni pic
import paporoniPizza from "../images/paporoni pizza-min.png";
import spicyImage from "../images/veg-pizza.png";

//pizza checken pic
import checkenPizza from "../images/checken_pizza.png";
import checken_pizza from "../images/checken-pizza-3.png";

const menuContent = [
  {
    id: 0,
    tapName: "بيتزا البابروني ",
    pizzaMenu: [
      {
        pizzaName: "بيتزا البابروني الدجاج",
        pizzaImage: paporoniPizza,
        cardDescription:
          "بيتزا البيبروني من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
        cardPrize: 89,
      },
      {
        pizzaName: "بيتزا البابروني الحاره",
        pizzaImage: spicyImage,
        cardDescription:
          "بيتزا البابروني بي القطع الهالبينو و الجبن الشيدر مع قطع الفطر الطازجة",
        cardPrize: 200,
      },
      {
        pizzaName: "بيتزا البابروني الرانشي",
        pizzaImage: checkenPizza,
        cardDescription:
          "بيتزا الدجاج الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 89,
      },
      {
        pizzaName: "بيتزا البابروني رانشي",
        pizzaImage: checkenPizza,
        cardDescription:
          "بيتزا الدجاج الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 99,
      },
    ],
  },

  {
    id: 1,
    tapName: "بيتزا الدجاج",
    pizzaMenu: [
      {
        pizzaName: "بيتزا الدجاج الحاره",
        pizzaImage: checkenPizza,
        cardDescription:
          "بيتزا الدجاج الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 89,
      },
      {
        pizzaName: "بيتزا الدجاج رانشي",
        pizzaImage: checkenPizza,
        cardDescription:
          "بيتزا الدجاج الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 99,
      },
      {
        pizzaName: "بيتزا الدجاج بالصلصه",
        pizzaImage: checken_pizza,
        cardDescription:
          "بيتزا الدجاج بي القطع الهالبينو و الجبن الشيدر مع قطع الفطر الطازجة",
        cardPrize: 69,
      },
      {
        pizzaName: "بيتزا البابروني الدجاج",
        pizzaImage: paporoniPizza,
        cardDescription:
          "بيتزا البيبروني من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
        cardPrize: 89,
      },
    ],
  },
  {
    id: 2,
    tapName: "بيتزا اللحم",
    pizzaMenu: [
      {
        pizzaName: "بيتزا اللحم الحاره",
        pizzaImage: paporoniPizza,
        cardDescription:
          "بيتزا البيبروني من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
        cardPrize: 69,
      },
      {
        pizzaName: "بيتزا اللحم بي الهلابينو",
        pizzaImage: spicyImage,
        cardDescription: "بيتزا اللحم بالصلصه ",
        cardPrize: 79,
      },
      {
        pizzaName: "بيتزا اللحم بي الصلصه",
        pizzaImage: checkenPizza,
        cardDescription:
          "بيتزا الدجاج الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 89,
      },
      {
        pizzaName: "بيتزا اللحم رانشي",
        pizzaImage: checkenPizza,
        cardDescription:
          "بيتزا الدجاج الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 99,
      },
    ],
  },
  {
    id: 3,
    tapName: "بيتزاالخضار",
    pizzaMenu: [
      {
        pizzaName: "بيتزا خضار",
        pizzaImage: spicyImage,
        cardDescription:
          "بيتزا البيبروني من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
        cardPrize: 77,
      },
      {
        pizzaName: "بيتزا خضار بي الشيدر",
        pizzaImage: paporoniPizza,
        cardDescription:
          "بيتزا الخضار الحاره مع قطع الجبن والخضروات الطازجة خبز كرنشي ",
        cardPrize: 79,
      },
      {
        pizzaName: "بيتزا خضار بي الدجاج",
        pizzaImage: paporoniPizza,
        cardDescription:
          "بيتزا الخضار الحاره مع قطع الجبن والخضروات الطازجة بطعمها الجميل والفريد ",
        cardPrize: 69,
      },
      {
        pizzaName: "بيتزا خضار بي البابروني",
        pizzaImage: spicyImage,
        cardDescription:
          "بيتزا الخضار من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
        cardPrize: 79,
      },
    ],
  },
];

function Menu() {
  const [activeTap, setActiveTap] = useState(0);

  return (
    <section className="max-w-4xl lg:m-auto" id="menu">
      <div className="flex justify-center gap-5 text-sm font-Cairo mt-5 md:gap-8 lg:text-lg  ">
        {menuContent.map((menuContent) => {
          return (
            <Tap
              num={menuContent.id}
              activeTap={activeTap}
              onClick={setActiveTap}
              name={menuContent.tapName}
              key={menuContent.tapName}
            />
          );
        })}
      </div>

      <div className="md:grid justify-center md:grid-cols-2  md:max-w-xl m-auto gap-y-8 lg:gap-x-24 lg:gap-y-10 lg:mt-6">
        {menuContent[activeTap].pizzaMenu.map((pizzaMenu) => {
          return (
            <CardMenu
              image={pizzaMenu.pizzaImage}
              pizzaName={pizzaMenu.pizzaName}
              cardDescription={pizzaMenu.cardDescription}
              cardPrize={pizzaMenu.cardPrize}
              key={pizzaMenu.pizzaName}
              activeTap={activeTap}
              num={menuContent[activeTap].id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Menu;
