using Application.Core;
using Application.Interfaces;
using Application.Todos.DTOs;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.Commands
{
    public class EditTodo
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required string TodoId { get; set; }
            public required CreateTodoDto TodoDto { get; set; }
        }

        public class Handler(AppDbContext context, IUserAccessor userAccessor, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var userId = userAccessor.GetUserId();

                if (userId == null) return Result<Unit>.Failure("User not authenticated", 403);

                var todo = await context.Todos.FirstOrDefaultAsync(x => x.Id == request.TodoId && x.UserId == userId);

                if (todo == null) return Result<Unit>.Failure("Todo was not found", 404);

                mapper.Map(request.TodoDto, todo);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!result) return Result<Unit>.Failure("Failed to save changes", 400);

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
