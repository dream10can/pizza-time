import CardDescription from "./card-description";

import CardTitle from "./card-title";

import PizzaPrize from "./pizza-prize";

import CardImage from "./card-image";

function Card({ pizzaName, cardDescription, cardPrize, image }) {
  return (
    <div className="w-56 h-56 bg-white flex flex-col items-center mt-20 rounded-tr-lg rounded-br-3xl rounded-tl-3xl rounded-bl-lg shadow-lg relative md:hover:-translate-y-5 md:duration-700 lg:w-64 lg:h-64">
      <CardImage image={image} />
      <div className="p-4 mt-20 text-center">
        <CardTitle pizzaName={pizzaName} />
        <CardDescription cardDescription={cardDescription} />
      </div>

      <PizzaPrize cardPrize={cardPrize} />
    </div>
  );
}

export default Card;
