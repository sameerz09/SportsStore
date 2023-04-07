using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;



namespace SportsStore.Controllers
{
    [Route("api/products")]
    public class ProductValuesController : Controller
    {
        private DataContext context;
        public ProductValuesController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet("{id}")]
        public Product GetProduct(long id)
        {
            System.Threading.Thread.Sleep(5000);
            Product result = context.Products
                   .Include(p => p.Supplier).ThenInclude(s => s.Products)
                   .Include(p => p.Ratings)
                   .First(p => p.ProductId == id);
            if (result != null)
            {
                if (result.Supplier != null)
                {
                    result.Supplier.Products = result.Supplier.Products.Select(p =>
                       new Product {
                           ProductId = p.ProductId,
                           Name = p.Name,
                           Category = p.Category,
                           Description = p.Description,
                           Price = p.Price,
                        });
                }
                if (result.Ratings != null)
                {
                    foreach (Rating r in result.Ratings)
                    {
                        r.Product = null;

                    }
                }
            }

            return result;
        }
    }
}