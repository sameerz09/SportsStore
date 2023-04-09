using System.ComponentModel.DataAnnotations;
namespace SportsStore.Models.BindingTargets
{
    public class ProductData
    {
        [Required]
        public string name { get; set; }
        [Required]
        public string category { get; set; }
        [Required]
        public string description { get; set; }
        [Range(1, int.MaxValue, ErrorMessage = "Price must be at least 1")]
        public decimal price { get; set; }
        public long supplier { get; set; }
        public Product product => new Product
        {
            Name = name,
            Category = category,
            Description = description,
            Price = price,
            Supplier = supplier == 0 ? null : new Supplier { SupplierId = Supplier }
        };
    }
}