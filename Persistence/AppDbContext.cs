using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Persistence
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Question> Questions { get; set; }
    }
}
