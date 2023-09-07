using MediatR;

namespace X.Application.Features.Activities.Commands.Delete;

public record DeleteActivityCommand(Guid Id) : IRequest<Unit>;