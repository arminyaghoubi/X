using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using X.Persistence.DatabaseContexts;

namespace X.Persistence;

public static class PersistenceServiceRegistration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfiguration configuration) =>
        services.AddDbContext<XDatabaseContext>(options => options.UseSqlite(configuration.GetConnectionString("XDatabaseContext")));
}