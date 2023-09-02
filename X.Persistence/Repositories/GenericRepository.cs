using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using X.Application.Contracts.Persistence;
using X.Domain.Common;
using X.Persistence.DatabaseContexts;

namespace X.Persistence.Repositories;

public class GenericRepository<TEntity> : IGenericRepository<TEntity>
    where TEntity : BaseEntity<Guid>
{
    private readonly XDatabaseContext _context;

    public DbSet<TEntity> Entities => _context.Set<TEntity>();

    public GenericRepository(XDatabaseContext context) => _context = context;

    public async Task<IReadOnlyList<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> predicate = null,
        Expression<Func<TEntity, object>> include = null,
        Expression<Func<TEntity, object>> order = null,
        bool ascending = true,
        bool disableTracking = true,
        int page = 1,
        int size = 15,
        CancellationToken cancellation = default)
    {
        var query = Entities.AsQueryable();

        if (predicate is not null)
            query = query.Where(predicate);

        if (include is not null)
            query = query.Include(include);

        if (order is not null)
            query = ascending ? query.OrderBy(order) : query.OrderByDescending(order);

        if (disableTracking)
            query = query.AsNoTracking();

        return await query.Skip((page - 1) * size).Take(size).ToListAsync(cancellation);
    }

    public async Task<TEntity?> GetByIdAsync(Guid id,
        Expression<Func<TEntity, object>> include = null,
        bool disableTracking = true,
        CancellationToken cancellation = default)
    {
        var query = Entities.AsQueryable();

        if (include is not null)
            query = query.Include(include);

        if (disableTracking)
            query = query.AsNoTracking();

        return await query.FirstOrDefaultAsync(e => e.Id == id, cancellation);
    }

    public async Task CreateAsync(TEntity entity, CancellationToken cancellation = default)
    {
        await Entities.AddAsync(entity);
        await _context.SaveChangesAsync(cancellation);
    }

    public async Task UpdateAsync(TEntity entity, CancellationToken cancellation = default)
    {
        Entities.Update(entity);
        await _context.SaveChangesAsync(cancellation);
    }

    public async Task DeleteAsync(TEntity entity, CancellationToken cancellation = default)
    {
        Entities.Remove(entity);
        await _context.SaveChangesAsync(cancellation);
    }

    public async Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellation = default) =>
        await Entities.AnyAsync(predicate, cancellation);
}
