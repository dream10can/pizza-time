import CardImage from "./card-image";

import CardTitle from "./card-title";

import CardDescription from "./card-description";

import PizzaPrize from "./pizza-prize";

function CardMenu({
  image,
  pizzaName,
  cardDescription,
  cardPrize,
  activeTap,
  num,
}) {
  return (
    <div
      className={
        "w-56 h-56 bg-white   flex flex-col items-center m-auto mt-20 rounded-tr-lg rounded-br-3xl rounded-tl-3xl rounded-bl-lg shadow-2xl relative md:hover:-translate-y-5 md:duration-700 lg:w-64 lg:h-64 "
      }
    >
      <CardImage image={image} />
      <div className="p-4 mt-20 text-center">
        <CardTitle pizzaName={pizzaName} />
        <CardDescription cardDescription={cardDescription} />
      </div>

      <PizzaPrize cardPrize={cardPrize} />
    </div>
  );
}

export default CardMenu;
