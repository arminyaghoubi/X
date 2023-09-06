namespace X.Application.Features.Common;

public class BaseDto<TKey>
    where TKey : struct
{
    public TKey Id { get; set; }
    public DateTime CreationDate { get; set; }
    public string? CreatorId { get; set; }
    public DateTime? LastModifiedDate { get; set; }
    public string? ModifierId { get; set; }
}
