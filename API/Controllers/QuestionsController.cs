using Application.Questions.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class QuestionsController(AppDbContext context, IMediator mediator) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await mediator.Send(new GetQuestionList.Query());
        }

        [Authorize]
        [HttpGet("ask")]
        public async Task<ActionResult<string>> GetAnswerToTheQuestion(string message)
        {
            return await mediator.Send(new GetAnswerToTheQuestion.Query { Message = message });
        }
    }
}
