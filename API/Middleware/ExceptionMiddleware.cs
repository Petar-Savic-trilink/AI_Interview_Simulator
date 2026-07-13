
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware
{
    public class ExceptionMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (ValidationException ex)
            {
                await HandleValidationException(context, ex);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }

        private static async Task HandleValidationException(HttpContext context, ValidationException ex)
        {
            var validationError = new Dictionary<string, string[]>();

            if(ex.Errors is not null)
            {
                foreach(var error in ex.Errors)
                {
                    if (validationError.TryGetValue(error.PropertyName, out var existingErrors))
                    {
                        validationError[error.PropertyName] = [.. existingErrors, error.ErrorMessage];
                    } else
                    {
                        validationError[error.PropertyName] = [error.ErrorMessage]; 
                    }
                }
            }

            context.Response.StatusCode = StatusCodes.Status400BadRequest;

            var validationProblemDetails = new ValidationProblemDetails(validationError)
            {
                Status = StatusCodes.Status400BadRequest,
                Type= "ValidationFailure",
                Title= "Validation Error",
                Detail = "One or more validation errors has occured"
            };

            await context.Response.WriteAsJsonAsync(validationProblemDetails);
        }
    }
}
