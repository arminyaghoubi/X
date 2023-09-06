using AutoMapper;
using MediatR;
using X.Application.Contracts.Persistence;
using X.Domain;

namespace X.Application.Features.Activities.Queries.GetAll;

public class GetAllActivityQueryHandler : IRequestHandler<GetAllActivityQuery, IEnumerable<GetAllActivityDto>>
{
    private readonly IGenericRepository<Activity> _activityRepository;
    private readonly IMapper _mapper;

    public GetAllActivityQueryHandler(IGenericRepository<Activity> activityRepository,
        IMapper mapper)
    {
        _activityRepository = activityRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<GetAllActivityDto>> Handle(GetAllActivityQuery request, CancellationToken cancellationToken)
    {
        var activities = await _activityRepository.GetAllAsync(page: request.Page,
            pageSize: request.PageSize,
            cancellation: cancellationToken);

        return _mapper.Map<IEnumerable<GetAllActivityDto>>(activities);
    }
}