using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Help.Controllers
{
    public class UserPage : Controller
    {
        public IActionResult Customer()
        {

            return View();
        }

        public IActionResult Provider()
        {
            return View();
        }
        
    }
}  
