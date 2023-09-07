using AutoMapper;
using MediatR;
using X.Application.Contracts.Persistence;
using X.Domain;

namespace X.Application.Features.Activities.Commands.Create;

public class CreateActivityCommandHandler : IRequestHandler<CreateActivityCommand, Unit>
{
    private readonly IGenericRepository<Activity> _activityRepository;
    private readonly IMapper _mapper;

    public CreateActivityCommandHandler(IGenericRepository<Activity> activityRepository,
        IMapper mapper)
    {
        _activityRepository = activityRepository;
        _mapper = mapper;
    }

    public async Task<Unit> Handle(CreateActivityCommand request, CancellationToken cancellationToken)
    {
        var newActivity = _mapper.Map<Activity>(request);

        await _activityRepository.CreateAsync(newActivity, cancellationToken);

        return Unit.Value;
    }
}