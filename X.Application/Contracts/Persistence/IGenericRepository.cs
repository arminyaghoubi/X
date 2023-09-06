using System.Linq.Expressions;
using X.Domain.Common;

namespace X.Application.Contracts.Persistence;

public interface IGenericRepository<TEntity>
    where TEntity : BaseEntity<Guid>
{
    Task<IReadOnlyList<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> predicate = null,
        Expression<Func<TEntity, object>> include = null,
        Expression<Func<TEntity, object>> order = null,
        bool ascending = true,
        bool disableTracking = true,
        bool hasPagination = false,
        int page = 1,
        int pageSize = 15,
        CancellationToken cancellation = default);

    Task<TEntity?> GetByIdAsync(Guid id,
        Expression<Func<TEntity, object>> include = null,
        bool disableTracking = true,
        CancellationToken cancellation = default);

    Task CreateAsync(TEntity entity, CancellationToken cancellation = default);
    Task UpdateAsync(TEntity entity, CancellationToken cancellation = default);
    Task DeleteAsync(TEntity entity, CancellationToken cancellation = default);
    Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellation = default);
}
