﻿using Help.Data;
using Help.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Help.Controllers
{
    public class HomeController : Controller
    {
        private readonly HelpContext _helpContext;
        private readonly ILogger<HomeController> _logger;
        private readonly IWebHostEnvironment _webHostEnv;

        public HomeController(ILogger<HomeController> logger, HelpContext helpContext, IWebHostEnvironment webHostEnv)
        {
            _logger = logger;
            _helpContext = helpContext;
            _webHostEnv = webHostEnv;
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
            return View();
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
        public IActionResult Contact(ContactU contactUs)
        {
            if (ModelState.IsValid)
            {
                if (contactUs.Attach != null)
                {
                    string folder = "ContactFile/";
                    folder += Guid.NewGuid().ToString() + "_" + contactUs.Attach.FileName;
                    string serverFolder = Path.Combine(_webHostEnv.WebRootPath, folder);
                    contactUs.Attach.CopyToAsync(new FileStream(serverFolder, FileMode.Create));
                    contactUs.FileName = folder;
                    contactUs.UploadFileName = contactUs.Attach.FileName;
                }

                contactUs.CreatedOn = DateTime.Now;
                _helpContext.ContactUs.Add(contactUs);
                _helpContext.SaveChanges();

                TempData["ContactForm"] = "Form Submitted, Thank You.";
                return RedirectToAction("Index");
            }


            return PartialView();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
