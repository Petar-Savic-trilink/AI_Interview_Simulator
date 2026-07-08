using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Question
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string QuestionText { get; set; }
        public required string Answer { get; set; }
        public required string IdealAnswer { get; set; }
        public required string Missing { get; set; }
        public int Score { get; set; }
    }
}
