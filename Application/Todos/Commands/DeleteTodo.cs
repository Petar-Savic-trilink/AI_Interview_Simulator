using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.Commands
{
    public class DeleteTodo
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required string TodoId { get; set; }
        }

        public class Handler(AppDbContext context, IUserAccessor userAccessor) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var userId = userAccessor.GetUserId();
                var todo = await context.Todos.Where(x => x.Id == request.TodoId && x.UserId == userId).FirstOrDefaultAsync(cancellationToken);
                if (todo == null) return Result<Unit>.Failure("Todo was not found", 404);

                context.Remove(todo);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Error occurs while deleting todo", 400);
            }
        }
    }
}
