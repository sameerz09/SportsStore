using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using SportsStore.Models.BindingTargets;
using System.Collections.Generic;


namespace SportsStore.Controllers
{
    [Route("api/suppliers")]
    public class SupplierValuesController : Controller
    {
        private DataContext context;
        public SupplierValuesController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet]
        public IEnumerable<Supplier> GetSuppliers()
        {
            return context.Suppliers;
        }
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
        [HttpPost]
        public IActionResult CreateSupplier([FromBody] SupplierData sdata)
        {
            if (ModelState.IsValid)
            {
                Supplier s = sdata.Supplier;
                context.Add(s);
                context.SaveChanges();
                return Ok(s.SupplierId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

    }
}