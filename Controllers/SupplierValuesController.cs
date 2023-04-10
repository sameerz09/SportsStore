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
<<<<<<< HEAD

        [HttpPost]

=======
      
        [HttpPost]
>>>>>>> a9026bddd4343b6f5918b4f5fa9dec3e00c2450c
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

>>>>>>> a9026bddd4343b6f5918b4f5fa9dec3e00c2450c
    }
}