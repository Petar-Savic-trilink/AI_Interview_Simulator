using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Quiz
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Title { get; set; }
        public required int Score { get; set; }
        public required string LearningRecomendations { get; set; }
        public DateTime StartedAt { get; set; } = DateTime.UtcNow;
        public DateTime? FinishedAt { get; set; }
        public ICollection<Question> Questions { get; set; } = [];

        public required string UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
