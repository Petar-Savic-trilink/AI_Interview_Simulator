using Application.Questions.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class QuestionsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await Mediator.Send(new GetQuestionList.Query());
        }

        [HttpGet("ask")]
        public async Task<ActionResult<string>> GetAnswerToTheQuestion(string message)
        {
            return await Mediator.Send(new GetAnswerToTheQuestion.Query { Message = message });
        }
    }
}
