using Application.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;

namespace Infrastructure.OpenRouterServices
{
    public class OpenRouterService : IOpenRouterService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public OpenRouterService(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClient = httpClientFactory.CreateClient("OpenRouter");
            _configuration = configuration;
        }

        public async Task<string> AskAsync(string prompt)
        {
            var apiKey = _configuration["OpenRouter:ApiKey"];

            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", apiKey);

            Console.WriteLine(_httpClient.BaseAddress);

            var request = new
            {
                model = "poolside/laguna-xs-2.1:free",
                messages = new[]
                {
                new
                {
                    role = "user",
                    content = prompt
                }
            }
            };

            var response = await _httpClient.PostAsJsonAsync(
                "chat/completions",
                request);

            response.EnsureSuccessStatusCode();

            var json = await response.Content.ReadFromJsonAsync<OpenRouterResponse>();

            return json!.Choices[0].Message.Content;
        }
    }
}
