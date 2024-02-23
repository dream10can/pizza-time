import Answer from "./answer";

function Question({ question, answer }) {
  return <Answer answer={answer} question={question}  />;
}

export default Question;
