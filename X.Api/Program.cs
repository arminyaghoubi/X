using X.Persistence;
using X.Application;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

string policyName = "AppPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(policyName, builder => builder.WithOrigins(configuration.GetValue<string>("UiBaseUrl")).AllowAnyHeader().AllowAnyMethod());
});

// Add services to the container.
builder.Services.AddPersistenceServices(configuration)
    .AddApplicationServices();

builder.Services.AddControllers(options => options.SuppressAsyncSuffixInActionNames = true);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseStaticFiles();
    app.UseSwagger();
    app.UseSwaggerUI(options=>options.InjectStylesheet("/swagger-ui/SwaggerDark.css"));
}

app.UseHttpsRedirection();

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();

app.Run();
