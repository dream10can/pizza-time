import Question from "./question";

const questions = [
  {
    id: 1,
    question: "ماهو مطعم بيتزا تايم؟",
    answer:
      "يعد بيتزا تايم افضل مطعم بيتزا بالرياض بسبب التركيز الكبير على الجودة في كل التفاصيل. تتميز البيتزا التي يقدمها المطعم بالمكونات الطازجة والجودة العالية، مما يجعل الطعم لا يُضاهى. كما يولي المطعم اهتمام بالديكور والأجواء والخدمة السريعة والممتازة",
  },

  {
    id: 2,
    question: "متى اوقات العمل ؟",
    answer:
      "أوقات العمل من الساعه 4 العصر الى الساعه 12 منتصف الليل من يوم الاحد الى الخميس",
  },

  {
    id: 3,
    question: "أفضل بيتزا لدينا ؟",
    answer:
      "بيتزا البيبروني من أفضل انواع البيتزا الايطاليه تتميز بطعمها الجميل والفريد ",
  },
];

function QuestionList() {
  return (
    <section className="max-w-4xl md:max-w-xl md:m-auto lg:max-w-3xl ">
      {questions.map((questions) => {
        return (
          <Question
            question={questions.question}
            answer={questions.answer}
            key={questions.id}
          />
        );
      })}
    </section>
  );
}

export default QuestionList;
