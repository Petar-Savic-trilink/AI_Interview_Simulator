using Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Questions.Queries
{
    public class GetAnswerToTheQuestion
    {
        public class Query : IRequest<string>
        {
            public required string Message { get; set; }
        }

        public class Handler(IOpenRouterService openRouterService) : IRequestHandler<Query, string>
        {
            public async Task<string> Handle(Query request, CancellationToken cancellationToken)
            {
                return await openRouterService.AskAsync(request.Message);
            }
        }
    }
}
