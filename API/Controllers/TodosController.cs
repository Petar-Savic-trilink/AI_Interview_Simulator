using Application.Todos.Commands;
using Application.Todos.DTOs;
using Application.Todos.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TodosController : BaseApiController
    {
        [HttpPost]
        public async Task<ActionResult<string>> CreateTodo(CreateTodoDto todoDto)
        {
            return HandleResult(await Mediator.Send(new CreateTodo.Command { TodoDto = todoDto }));
        }

        [HttpGet]
        public async Task<ActionResult<List<GetTodoDto>>> GetTodoList()
        {
            return await Mediator.Send(new GetTodoList.Query { });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetTodoDto>> GetTodoById(string id)
        {
            return await Mediator.Send(new GetTodo.Query { TodoId = id });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditTodo(CreateTodoDto todo, [FromRoute] string id)
        {
            await Mediator.Send(new EditTodo.Command { TodoDto = todo, TodoId = id });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTodo(string id)
        {
            await Mediator.Send(new DeleteTodo.Command { TodoId = id });
            return NoContent();
        }
    }
}
