using X.Application.Features.Common;

namespace X.Application.Features.Activities.Queries.GetDetails;

public class GetDetailsActivityDto : BaseDto<Guid>
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Venue { get; set; }
    public DateTime Date { get; set; }
}