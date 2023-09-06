using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace X.Api.Controllers.Common;

[ApiController]
[Route("api/[controller]")]
public class BaseController : ControllerBase
{
    private IMediator _mediator;

    protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
}
