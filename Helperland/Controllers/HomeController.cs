using Helperland.Models;
using Helperland.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace Helperland.Controllers
{
    public class HomeController : Controller
    {
        private readonly HelperlandContext _helperlandContext;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public HomeController(HelperlandContext helperlandContext, IWebHostEnvironment webHostEnvironment)
        {
            _helperlandContext = helperlandContext;
            _webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Prices()
        {
            return View();
        }

        public IActionResult Contact()
        {
            ContactUs contactUs = new ContactUs();
            return View(contactUs);
        }


        public IActionResult Faq()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult BecomePro()
        {
            return View();
        }

        
        [HttpPost]
        public IActionResult Contact(ContactUs contactUs)
        {
            _helperlandContext.ContactUs.Add(contactUs);
            _helperlandContext.SaveChanges();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
