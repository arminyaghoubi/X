using MediatR;

namespace X.Application.Features.Activities.Queries.GetAll;

public record GetAllActivityQuery(int Page, int PageSize) : IRequest<IEnumerable<GetAllActivityDto>>;
