using AutoMapper;
using X.Application.Features.Activities.Queries.GetAll;
using X.Domain;

namespace X.Application.MappingProfilers;

public class ActivityProfile:Profile
{
    public ActivityProfile()
    {
        CreateMap<Activity, GetAllActivityDto>();
    }
}
