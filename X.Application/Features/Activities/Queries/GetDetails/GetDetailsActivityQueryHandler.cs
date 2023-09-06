using AutoMapper;
using MediatR;
using X.Application.Contracts.Persistence;
using X.Domain;

namespace X.Application.Features.Activities.Queries.GetDetails;

public class GetDetailsActivityQueryHandler : IRequestHandler<GetDetailsActivityQuery, GetDetailsActivityDto>
{
    private readonly IGenericRepository<Activity> _activityRepository;
    private readonly IMapper _mapper;

    public GetDetailsActivityQueryHandler(IGenericRepository<Activity> activityRepository,
        IMapper mapper)
    {
        _activityRepository = activityRepository;
        _mapper = mapper;
    }

    public async Task<GetDetailsActivityDto> Handle(GetDetailsActivityQuery request, CancellationToken cancellationToken)
    {
        var activity = await _activityRepository.GetByIdAsync(request.Id, cancellation: cancellationToken);

        return _mapper.Map<GetDetailsActivityDto>(activity);
    }
}