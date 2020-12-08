import React from "react";
import { AnswerObject } from "../App";
interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    qNumber: number;
    totalNumber: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    qNumber,
    totalNumber,
}) => {
    return (
        <div>
            <p className="number">
                Question : {qNumber} / {totalNumber}
            </p>
            <p>{question}</p>
            <div>
                {answers.map((answer, idx) => (
                    <div key={idx}>
                        <button
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}
                        >
                            <span>{answer}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
