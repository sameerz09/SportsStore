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
            return context.Products
                   .Include(p => p.Supplier)
                   .Include(p => p.Ratings)
                   .FirstOrDefault(p => p.ProductId == id);
        }
    }
}