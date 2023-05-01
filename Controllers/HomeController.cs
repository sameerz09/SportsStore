using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using System.Linq;
using Microsoft.AspNetCore.Authorization;


namespace SportsStore.Controllers {
    public class HomeController : Controller {

        public IActionResult Index() {
            ViewBag.Message = "I Like dotnet";
            return View();
        }
        [Authorize]
        public string Protected()
        {
            return "You have been authenticated";
        }
    }
}
