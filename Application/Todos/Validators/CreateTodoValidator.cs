using Application.Todos.Commands;
using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Todos.Validators
{
    public  class CreateTodoValidator : AbstractValidator<CreateTodo.Command>
    {
        public CreateTodoValidator()
        {
            RuleFor(x => x.TodoDto.Title).NotEmpty().WithMessage("Title is required");
            RuleFor(x => x.TodoDto.Description).NotEmpty().WithMessage("Description is required");
            RuleFor(x => x.TodoDto.State).Must(state => state == State.IN_PROGRESS).WithMessage("Initial state must be In Progress");
        }
    }
}
