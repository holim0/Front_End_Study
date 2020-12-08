import React, { useState } from "react";
import QuestionCard from "./Components/QuestionCard";
import { fetchData, Difficulty, QuestionState } from "./API";

const TOTAL_Q: number = 10;

export interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(true);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuiz: QuestionState[] = await fetchData(
            TOTAL_Q,
            Difficulty.EASY
        );
        console.log(newQuiz);
        setQuestions(newQuiz);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;

            const correct = questions[number].correct_answer;

            if (answer === correct) {
                setScore((prev) => prev + 1);
            }

            const answerObject: AnswerObject = {
                question: questions[number].question,
                answer,
                correct: answer === correct,
                correctAnswer: questions[number].correct_answer,
            };

            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuiz = () => {
        const next = number + 1;

        if (next === TOTAL_Q) {
            setGameOver(true);
        } else {
            setNumber(next);
        }
    };
    return (
        <div className="APP">
            <h1>REACT QUIZ</h1>
            {gameOver || userAnswers.length === TOTAL_Q ? (
                <button className="start" onClick={startQuiz}>
                    Start
                </button>
            ) : null}

            {!gameOver ? <p className="Score">Score: {score}</p> : null}
            {loading ? <p>Loading Questions...</p> : null}
            {!loading && !gameOver && (
                <QuestionCard
                    qNumber={number + 1}
                    totalNumber={TOTAL_Q}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            {!gameOver &&
            !loading &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_Q - 1 ? (
                <button className="Next" onClick={nextQuiz}>
                    Next Questions
                </button>
            ) : null}
        </div>
    );
}

export default App;
