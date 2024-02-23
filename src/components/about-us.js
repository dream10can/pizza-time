import resturant from "../images/pizza resturant.png";
import Article from "./article";
import Heading from "./heading";
import Button from "./cta";

const heading = "عن بيتزا تايم";

const article =
  "إذا كنت من محبي البيتزا في الرياض، فيجب أن تكون بيتزا تايم دا ميمو على رأس قائمتك. اكتسب بيتزا تايم سمعة طيبة بسبب البيتزا اللذيذة وخدمة العملاء الممتازة والأجواء المثالية به";

function AboutUs() {
  return (
    <div className="flex flex-col items-center mt-16 " id="vision">
      <Heading heading={heading} />
      <img
        src={resturant}
        alt="pizza resturant"
        className="w-4/5 rounded-md mt-8 md:w-1/2 lg:w-2/5"
      />

      <Article article={article} />

      <Button />
    </div>
  );
}

export default AboutUs;
