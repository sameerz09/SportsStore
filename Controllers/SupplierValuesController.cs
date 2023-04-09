using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using SportsStore.Models.BindingTargets;
using System.Collections.Generic;
<<<<<<< HEAD
=======


>>>>>>> 994cbf911b5a8ac7f8bc8e0da821c1d22f1dbad0
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
<<<<<<< HEAD
=======
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
>>>>>>> 994cbf911b5a8ac7f8bc8e0da821c1d22f1dbad0
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
<<<<<<< HEAD
=======

>>>>>>> 994cbf911b5a8ac7f8bc8e0da821c1d22f1dbad0
    }
}