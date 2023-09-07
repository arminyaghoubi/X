using AutoMapper;
using MediatR;
using X.Application.Contracts.Persistence;
using X.Domain;

namespace X.Application.Features.Activities.Commands.Update;

public class UpdateActivityCommandHandler : IRequestHandler<UpdateActivityCommand, Unit>
{
    private readonly IGenericRepository<Activity> _activityRepository;
    private readonly IMapper _mapper;

    public UpdateActivityCommandHandler(IGenericRepository<Activity> activityRepository,
        IMapper mapper)
    {
        _activityRepository = activityRepository;
        _mapper = mapper;
    }

    public async Task<Unit> Handle(UpdateActivityCommand request, CancellationToken cancellationToken)
    {
        var activity = await _activityRepository.GetByIdAsync(request.Id, cancellation: cancellationToken);

        _mapper.Map(request, activity);

        await _activityRepository.UpdateAsync(activity, cancellationToken);

        return Unit.Value;
    }
}