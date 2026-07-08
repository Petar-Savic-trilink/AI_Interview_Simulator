using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Questions.Queries
{
    public class GetQuestionList
    {
        public class Query : IRequest<List<Question>>
        {
        }

        public class Handler(AppDbContext context) : IRequestHandler<Query, List<Question>>
        {
            public async Task<List<Question>> Handle(Query request, CancellationToken cancellationToken)
            {
                var result = await context.Questions.ToListAsync(cancellationToken);

                return result;
            }
        }
    }
}
