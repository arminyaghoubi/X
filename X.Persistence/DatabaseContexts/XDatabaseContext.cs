using Microsoft.EntityFrameworkCore;
using X.Domain;
using X.Domain.Common;

namespace X.Persistence.DatabaseContexts;

public class XDatabaseContext : DbContext
{
    public DbSet<Activity> Activities { get; set; }

    public XDatabaseContext(DbContextOptions options) :base(options)
    {
        
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        foreach (var entity in ChangeTracker.Entries<BaseEntity<Guid>>().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
        {
            entity.Entity.LastModifiedDate = DateTime.Now;
            entity.Entity.ModifierId = string.Empty;

            if (entity.State == EntityState.Added)
            {
                entity.Entity.CreationDate = DateTime.Now;
                entity.Entity.CreatorId = string.Empty;
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }
}
