using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using SportsStore.Models.BindingTargets;

[Route("api/products")]
public class ProductValuesController : Controller
{
    private DataContext context;
    public ProductValuesController(DataContext ctx)
    {
        context = ctx;
    }
    // ..other action methods omitted for brevity...
    [HttpPost]
    public IActionResult CreateProduct([FromBody] ProductData pdata)
    {
        if (ModelState.IsValid)
        {
            Product p = pdata.Product;
            if (p.Supplier != null && p.Supplier.SupplierId != 0)
            {
                context.Attach(p.Supplier);
            }
            context.Add(p);
            context.SaveChanges();
            return Ok(p.ProductId);
        }
        else
        {
            return BadRequest(ModelState);
        }
    }
}
}