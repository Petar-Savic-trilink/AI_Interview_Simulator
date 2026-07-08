using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface IOpenRouterService
    {
        Task<string> AskAsync(string prompt);
    }
}
