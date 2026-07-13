using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.DTOs
{
    public class GetTodoDto
    {
        public required string Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public TimeSpan EstimatedTime { get; set; }
        public TimeSpan TimeLogged { get; set; }
        public State State { get; set; }
    }
}
