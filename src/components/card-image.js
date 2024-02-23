function CardImage({ image }) {
  return (
    <img
      src={image}
      alt="بيتزا البيبوروني"
      className="w-2/3 h-2/3 absolute -top-1/4"
    ></img>
  );
}

export default CardImage;
