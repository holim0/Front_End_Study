import axios from "axios";
import { shuffleArray } from "./utils";

export interface QuestionType {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}
export interface QuestionState extends QuestionType {
    answers: string[];
}

export enum Difficulty {
    EASY = "easy",
    MEDIUN = "medium",
    HARD = "hard",
}

export const fetchData = async (
    amount: number,
    difficulty: Difficulty
): Promise<QuestionState[]> => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const {
        data: { results },
    } = await axios.get(endPoint);

    return results.map((value: QuestionType) => {
        return {
            ...value,
            answers: shuffleArray([
                ...value.incorrect_answers,
                value.correct_answer,
            ]),
        };
    });
};
