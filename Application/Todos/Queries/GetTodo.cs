using Application.Core;
using Application.Interfaces;
using Application.Todos.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.Queries
{
    public class GetTodo
    {
        public class Query : IRequest<Result<GetTodoDto>>
        {
            public required string TodoId { get; set; }
        }

        public class Handler(AppDbContext context, IUserAccessor userAccessor, IMapper mapper) : IRequestHandler<Query, Result<GetTodoDto>>
        {
            public async Task<Result<GetTodoDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var userId = userAccessor.GetUserId();
                var todo = await context.Todos.Where(x => x.UserId == userId).ProjectTo<GetTodoDto>(mapper.ConfigurationProvider).FirstOrDefaultAsync(x => x.Id == request.TodoId, cancellationToken);
                if (todo == null) return Result<GetTodoDto>.Failure("Failed to retrieve todo!", 404);
                return Result<GetTodoDto>.Success(todo);
            }
        }
    }
}
