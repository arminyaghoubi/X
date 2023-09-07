using AutoMapper;
using X.Application.Features.Activities.Commands.Create;
using X.Application.Features.Activities.Queries.GetAll;
using X.Application.Features.Activities.Queries.GetDetails;
using X.Domain;

namespace X.Application.MappingProfilers;

public class ActivityProfile : Profile
{
    public ActivityProfile()
    {
        CreateMap<Activity, GetAllActivityDto>();
        CreateMap<Activity, GetDetailsActivityDto>();
        CreateMap<CreateActivityCommand, Activity>();
    }
}
