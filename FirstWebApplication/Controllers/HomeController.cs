using Microsoft.AspNetCore.Mvc;

namespace FirstWebApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CybersportHistory()
        {
            return View();
        }

        public IActionResult Games()
        {
            return View();
        }

        public IActionResult News()
        {
            return View();
        }

        public IActionResult Tournaments()
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }

        public IActionResult Crossword()
        {
            return View();
        }
    }
}
