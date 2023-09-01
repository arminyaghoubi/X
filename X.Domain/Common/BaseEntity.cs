namespace X.Domain.Common;

public class BaseEntity<TKey>
    where TKey : struct
{
    public TKey Id { get; set; }
    public DateTime CreationDate { get; set; }
    public string? CreatorId { get; set; }
    public DateTime? LastModifiedDate { get; set; }
    public string? ModifierId { get; set; }
}
