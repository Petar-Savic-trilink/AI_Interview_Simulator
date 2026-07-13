using Application.Core;
using Application.Interfaces;
using Application.Todos.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.Queries
{
    public interface GetTodoList
    {
        public class Query : IRequest<Result<List<GetTodoDto>>>
        {

        }

        public class Handler(AppDbContext context, IUserAccessor userAccessor, IMapper mapper) : IRequestHandler<Query, Result<List<GetTodoDto>>>
        {
            public async Task<Result<List<GetTodoDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var userId = userAccessor.GetUserId();

                var todos = await context.Todos.Where(x => x.UserId == userId).ProjectTo<GetTodoDto>(mapper.ConfigurationProvider).ToListAsync(cancellationToken);

                if (todos == null) return Result<List<GetTodoDto>>.Failure("Failed to get any todos", 400);

                return Result<List<GetTodoDto>>.Success(todos);
            }
        }
    }
}
