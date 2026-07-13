using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public enum State
    {
        DONE,
        IN_PROGRESS,
        DROPPED
    }
    public class Todo
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Title { get; set; }
        public required string Description { get; set; }
        public TimeSpan EstimatedTime { get; set; }
        public TimeSpan TimeLogged { get; set; }
        public State State { get; set; }
        public required string UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
