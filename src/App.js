import NavBar from "./components/navbar";

import Hero from "./components/hero";
import SpecialDish from "./components/best-dish";
import Heading from "./components/heading";
import QuestionList from "./components/question-list";
import Menu from "./components/menu";
import Footer from "./components/footer";

const heading = "الأسأله المتكررة";

const menu = "المنيو";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SpecialDish />
      <Heading heading={menu} />
      <Menu />
      <Heading heading={heading} />
      <QuestionList />
      <Footer />
    </div>
  );
}

export default App;
