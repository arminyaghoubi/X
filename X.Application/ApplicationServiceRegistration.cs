using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace X.Application;

public static class ApplicationServiceRegistration
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services) =>
        services.AddMediatR(config => config.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()))
        .AddAutoMapper(Assembly.GetExecutingAssembly());
}
