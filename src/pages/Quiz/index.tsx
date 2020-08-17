import React from "react";
import { Link } from "react-router-dom";
import ManualLogo from "../../assets/img/manual-symbol.svg";
import "./index.scss";
import ApiService from "services/apiService";

interface Question {
  question: string;
  type: string;
  options: Object[];
}

interface State {
  questions: Question[];
  activeQuestionIndex: number;
  answers: string[];
  isLoading: boolean;
}

interface Props {}

export default class Quiz extends React.Component<Props, State> {
  state: State = {
    activeQuestionIndex: 0,
    answers: [],
    questions: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const apiUrl = "https://api.jsonbin.io/b/5f3948c44d9399103615ec4d/1";

    ApiService.get(apiUrl).then(
      (response) =>
        this.setState({ isLoading: false, questions: response.questions }),
      (error) => {
        this.setState({ isLoading: false });
        alert(error);
      }
    );
  }

  handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { answers, activeQuestionIndex } = this.state;
    answers[activeQuestionIndex] = e.target.value;

    this.setState({ answers });
  };

  handleNextClick = () => {
    let { activeQuestionIndex } = this.state;
    this.setState({
      activeQuestionIndex: activeQuestionIndex + 1,
    });
  };

  handlePreviousClick = () => {
    let { activeQuestionIndex } = this.state;
    this.setState({
      activeQuestionIndex: activeQuestionIndex - 1,
    });
  };

  isFirstQuestion = () => this.state.activeQuestionIndex === 0;

  isLastQuestion = () =>
    this.state.activeQuestionIndex === this.state.questions.length - 1;

  isResultsPage = () =>
    this.state.activeQuestionIndex === this.state.questions.length;

  getResultStatus = () => {
    let trueAns = this.state.answers.filter((answer) => answer === "true");
    return !(trueAns && trueAns.length);
  };

  getResultText = () => {
    if (!this.getResultStatus()) {
      return "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.";
    } else {
      return "Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co,​ and prepare to say hello to your new hair!";
    }
  };

  render() {
    let { activeQuestionIndex, answers, questions } = this.state;
    const question: Question = questions[activeQuestionIndex];
    return (
      <div className="quiz-container">
        <Link to="/">
          <img src={ManualLogo} className="logo" alt="Manual" />
        </Link>
        {this.state.isLoading ? (
          <p className="loading-text">Loading questions...</p>
        ) : (
          <>
            {this.state.questions.length ? (
              <>
                {this.isResultsPage() ? (
                  <div
                    className={`result ${
                      this.getResultStatus() ? "success" : "error"
                    }`}
                  >
                    <p className="title">Quiz Results</p>
                    <p className="message">{this.getResultText()}</p>
                  </div>
                ) : (
                  <>
                    <div className="question">
                      <p className="question-count">{`Q${
                        activeQuestionIndex + 1
                      }`}</p>
                      <p className="question-text">{question.question}</p>
                      <div className="question-options">
                        {question.options.map((option: any, index) => (
                          <label
                            key={`quiz_question_${activeQuestionIndex}_${index}`}
                            className="single-option"
                          >
                            <input
                              onChange={this.handleOptionChange}
                              type="radio"
                              checked={
                                option[Object.keys(option)[0]].toString() ===
                                answers[activeQuestionIndex]
                              }
                              value={option[Object.keys(option)[0]]}
                              name={`quiz_question_${activeQuestionIndex}`}
                            />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: Object.keys(option)[0],
                              }}
                            ></div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="action-buttons">
                      {!this.isFirstQuestion() ? (
                        <button
                          onClick={this.handlePreviousClick}
                          className="prev-btn"
                        >
                          Back
                        </button>
                      ) : null}
                      <button
                        disabled={!answers[activeQuestionIndex]}
                        onClick={this.handleNextClick}
                        className="next-btn"
                      >
                        {this.isLastQuestion() ? "Submit" : "Next"}
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : null}
          </>
        )}
      </div>
    );
  }
}