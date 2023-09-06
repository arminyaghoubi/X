using MediatR;
using X.Application.Contracts.Persistence;
using X.Domain;

namespace X.Application.Features.Activities.Queries.GetAll;

public class GetAllActivityQueryHandler : IRequestHandler<GetAllActivityQuery, IEnumerable<GetAllActivityDto>>
{
    private readonly IGenericRepository<Activity> _activityRepository;

    public GetAllActivityQueryHandler(IGenericRepository<Activity> activityRepository)
    {
        _activityRepository = activityRepository;
    }

    public async Task<IEnumerable<GetAllActivityDto>> Handle(GetAllActivityQuery request, CancellationToken cancellationToken)
    {
        var activities= await _activityRepository.GetAllAsync(page: request.Page,
            pageSize: request.PageSize,
            cancellation: cancellationToken);

        return activities.Select(a => new GetAllActivityDto
        {
            Category = a.Category,
            City = a.City,
            CreationDate = a.CreationDate,
            CreatorId = a.CreatorId,
            Date = a.Date,
            Description = a.Description,
            Id = a.Id,
            LastModifiedDate = a.LastModifiedDate,
            ModifierId = a.ModifierId,
            Title = a.Title,
            Venue = a.Venue
        });
    }
}