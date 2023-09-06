using MediatR;

namespace X.Application.Features.Activities.Queries.GetDetails;

public record GetDetailsActivityQuery(Guid Id) : IRequest<GetDetailsActivityDto>;
