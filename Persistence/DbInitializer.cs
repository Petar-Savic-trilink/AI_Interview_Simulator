using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Persistence
{
    public class DbInitializer
    {
        public static async Task SeedData(AppDbContext context)
        {
            if (context.Questions.Any()) return;

            var testQuestions = new List<Question>()
            {
                new Question
                {
                    QuestionText = "QuestionText 1",
                    Answer = "Answer1",
                    IdealAnswer = "IdealAnswer1",
                    Missing = "Missing1",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 2",
                    Answer = "Answer2",
                    IdealAnswer = "IdealAnswer2",
                    Missing = "Missing2",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 3",
                    Answer = "Answer3",
                    IdealAnswer = "IdealAnswer3",
                    Missing = "Missing3",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 4",
                    Answer = "Answer4",
                    IdealAnswer = "IdealAnswer4",
                    Missing = "Missing4",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 5",
                    Answer = "Answer5",
                    IdealAnswer = "IdealAnswer5",
                    Missing = "Missing5",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 6",
                    Answer = "Answer6",
                    IdealAnswer = "IdealAnswer6",
                    Missing = "Missing6",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 7",
                    Answer = "Answer7",
                    IdealAnswer = "IdealAnswer7",
                    Missing = "Missing7",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 8",
                    Answer = "Answer8",
                    IdealAnswer = "IdealAnswer8",
                    Missing = "Missing8",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 9",
                    Answer = "Answer9",
                    IdealAnswer = "IdealAnswer9",
                    Missing = "Missing9",
                    Score = 0
                },
                new Question
                {
                    QuestionText = "QuestionText 10",
                    Answer = "Answer10",
                    IdealAnswer = "IdealAnswer10",
                    Missing = "Missing10",
                    Score = 0
                }
            };

            context.Questions.AddRange(testQuestions);
            await context.SaveChangesAsync();
        }
    }
}
