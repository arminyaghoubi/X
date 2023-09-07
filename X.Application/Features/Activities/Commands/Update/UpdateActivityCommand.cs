using MediatR;

namespace X.Application.Features.Activities.Commands.Update;

public class UpdateActivityCommand : IRequest<Unit>
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Venue { get; set; }
    public DateTime Date { get; set; }
}