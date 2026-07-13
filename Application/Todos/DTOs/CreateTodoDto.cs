using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.DTOs
{
    public class CreateTodoDto
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public TimeSpan EstimatedTime { get; set; }
        public TimeSpan TimeLogged { get; set; }
        public State State { get; set; }
    }
}
