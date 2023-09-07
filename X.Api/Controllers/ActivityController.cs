using Microsoft.AspNetCore.Mvc;
using X.Api.Controllers.Common;
using X.Application.Features.Activities.Commands.Create;
using X.Application.Features.Activities.Queries.GetAll;
using X.Application.Features.Activities.Queries.GetDetails;

namespace X.Api.Controllers;

public class ActivityController : BaseController
{
    [HttpGet]
    public async Task<ActionResult> GetAsync([FromQuery] int page = 1, [FromQuery] int pageSize = 15, CancellationToken cancellation = default) =>
        Ok(await Mediator.Send(new GetAllActivityQuery(page, pageSize), cancellation));

    [HttpGet("{id}")]
    public async Task<ActionResult> GetByIdAsync([FromRoute] Guid id, CancellationToken cancellation) =>
        Ok(await Mediator.Send(new GetDetailsActivityQuery(id), cancellation));

    [HttpPost]
    public async Task<ActionResult> CreateAsync([FromBody] CreateActivityCommand command, CancellationToken cancellation) =>
        Ok(await Mediator.Send(command, cancellation));
}
