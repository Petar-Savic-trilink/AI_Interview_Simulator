import type { Question } from "./question";
import type { User } from "./user";

export type Quiz = {
    id: string;
    title: string;
    score: number;
    learningRecomendations: string;
    startedAt: Date;
    finishedAt?: Date
    questions: Question[];
    userId: string;
    user: User;
}