using AutoMapper;
using MediatR;
using X.Application.Contracts.Persistence;
using X.Domain;

namespace X.Application.Features.Activities.Commands.Delete;

public class DeleteActivityCommandHandler : IRequestHandler<DeleteActivityCommand, Unit>
{
    private readonly IGenericRepository<Activity> _activityRepository;

    public DeleteActivityCommandHandler(IGenericRepository<Activity> activityRepository,
        IMapper mapper)
    {
        _activityRepository = activityRepository;
    }

    public async Task<Unit> Handle(DeleteActivityCommand request, CancellationToken cancellationToken)
    {
        var activity = await _activityRepository.GetByIdAsync(request.Id, cancellation: cancellationToken);

        await _activityRepository.DeleteAsync(activity);

        return Unit.Value;
    }
}
