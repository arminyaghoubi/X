using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using X.Domain;

namespace X.Persistence.Configurations;

internal class ActivityConfiguration : IEntityTypeConfiguration<Activity>
{
    public void Configure(EntityTypeBuilder<Activity> builder)
    {
        builder.HasData(
            new Activity
            {
                Id=Guid.NewGuid(),
                Title = "Past Activity 1",
                Date = DateTime.Now.AddMonths(-2),
                Description = "Activity 2 months ago",
                Category = "film",
                City = "Tehran",
                Venue = "Azadi"
            },
            new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Past Activity 2",
                Date = DateTime.Now.AddMonths(-1),
                Description = "Activity 1 month ago",
                Category = "music",
                City = "Tehran",
                Venue = "Vahdat"
            },
            new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Future Activity 1",
                Date = DateTime.Now.AddMonths(1),
                Description = "Activity 1 month in future",
                Category = "film",
                City = "Tehran",
                Venue = "Farhang"
            },
            new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Future Activity 2",
                Date = DateTime.Now.AddMonths(2),
                Description = "Activity 2 months in future",
                Category = "music",
                City = "Tehran",
                Venue = "Milad"
            },
            new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Future Activity 3",
                Date = DateTime.Now.AddMonths(3),
                Description = "Activity 3 months in future",
                Category = "sport",
                City = "Tehran",
                Venue = "Bam"
            },
            new Activity
            {
                Id = Guid.NewGuid(),
                Title = "Past Activity 1",
                Date = DateTime.Now.AddMonths(-2),
                Description = "Activity 2 months ago",
                Category = "travel",
                City = "Mazandaran",
                Venue = "Motelgho"
            });
    }
}
