using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using X.Application.Contracts.Persistence;
using X.Persistence.DatabaseContexts;
using X.Persistence.Repositories;

namespace X.Persistence;

public static class PersistenceServiceRegistration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfiguration configuration) =>
        services.AddDbContext<XDatabaseContext>(options => options.UseSqlite(configuration.GetConnectionString("XDatabaseContext")))
        .AddScoped(typeof(IGenericRepository<>),typeof(GenericRepository<>));
}