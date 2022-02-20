using Help.Data;
using Help.Models;
using Help.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Help.Controllers
{
    public class ServiceRequest : Controller
    {
        private readonly HelpContext _helperlandContext;
        public ServiceRequest(HelpContext helperlandContext)
        {
            _helperlandContext = helperlandContext;
        }

        public IActionResult BookService()
        {
            if (HttpContext.Session.GetInt32("userId") != null)
            {
                var id = HttpContext.Session.GetInt32("userId");
                User user = _helperlandContext.Users.Find(id);
                ViewBag.Name = user.FirstName;
                ViewBag.UserType = user.UserTypeId;
                if (user.UserTypeId == 1)
                {
                    return View();
                }
            }
            else if (Request.Cookies["userId"] != null)
            {
                var user = _helperlandContext.Users.FirstOrDefault(x => x.UserId == Convert.ToInt32(Request.Cookies["userId"]));
                ViewBag.Name = user.FirstName;
                ViewBag.UserType = user.UserTypeId;
                if (user.UserTypeId == 1)
                {
                    return View();
                }
            }
            TempData["LoginNeed"] = "Please Try Logging In";
            return RedirectToAction("Index", "Home");
        }


        [HttpPost]
        public IActionResult ValidPostalCode(Setupservice obj)
        {
            var list = _helperlandContext.Users.Where(x => (x.ZipCode == obj.ZipCode) && (x.UserTypeId == 2)).ToList();

            if (list.Count() > 0)
            {
                return Ok(Json("true"));
            }
            else {
                TempData["wrongZipCode"] = "service provider is not avilable in this area.";
                return Ok(Json("false"));
            }
        }


        [HttpPost]
        public ActionResult ScheduleService(ScheduleService schedule)
        {

            if (ModelState.IsValid)
            {
                return Ok(Json("true"));
            }
            else
            {
                return Ok(Json("false"));
            }
        }

    } 
}
