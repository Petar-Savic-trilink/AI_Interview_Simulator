using Application.Core;
using Application.Interfaces;
using Application.Todos.DTOs;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.Commands
{
    public class CreateTodo
    {
        public class Command : IRequest<Result<string>>
        {
            public required CreateTodoDto TodoDto { get; set; }
        }

        public class Handler(AppDbContext context, IMapper mapper, IUserAccessor userAccessor) : IRequestHandler<Command, Result<string>>
        {
            public async Task<Result<string>> Handle(Command request, CancellationToken cancellationToken)
            {
                var todo = mapper.Map<Todo>(request.TodoDto);
                todo.UserId = userAccessor.GetUserId();
                todo.State = State.IN_PROGRESS;
                context.Todos.Add(todo);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!result) return Result<string>.Failure("Error occured while saving the TODO", 400);

                return Result<string>.Success(todo.Id);
            }
        }
    }
}
