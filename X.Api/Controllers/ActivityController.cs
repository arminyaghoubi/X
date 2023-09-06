using Microsoft.AspNetCore.Mvc;
using X.Api.Controllers.Common;
using X.Application.Features.Activities.Queries.GetAll;

namespace X.Api.Controllers;

public class ActivityController : BaseController
{
    [HttpGet]
    public async Task<ActionResult> Get(int page = 1, int pageSize = 15) =>
        Ok(Mediator.Send(new GetAllActivityQuery(page, pageSize)));
}
