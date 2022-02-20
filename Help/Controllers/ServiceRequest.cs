﻿using Help.Data;
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




        [HttpGet]
        public IActionResult DetailsService(Setupservice obj)
        {

            int Id = -1;

            List<Address> Addresses = new List<Address>();
            if (HttpContext.Session.GetInt32("userId") != null)
            {
                Id = (int)HttpContext.Session.GetInt32("userId");
            }
            else if (Request.Cookies["userId"] != null)
            {
                Id = int.Parse(Request.Cookies["userId"]);

            }


            string postalcode = obj.ZipCode;
            Console.WriteLine(obj.ZipCode);
            var table = _helperlandContext.UserAddresses.Where(x => x.UserId == Id && x.PostalCode == postalcode).ToList();
            Console.WriteLine(table.ToString());

            foreach (var add in table)
            {
                Console.WriteLine("1");
                Address useradd = new Address
                {
                    AddressId = add.AddressId,
                    AddressLine1 = add.AddressLine1,
                    AddressLine2 = add.AddressLine2,
                    City = add.City,
                    PostalCode = add.PostalCode,
                    Mobile = add.Mobile,
                    isDefault = add.IsDefault
                };

                Addresses.Add(useradd);
            }
            Console.WriteLine("2");

            return new JsonResult(Addresses);
        }




        [HttpPost]
        public ActionResult AddNewAddress(UserAddress useradd)
        {
            Console.WriteLine("Inside Addnew address 1");
            int Id = -1;


            if (HttpContext.Session.GetInt32("userId") != null)
            {
                Id = (int)HttpContext.Session.GetInt32("userId");
            }
            else if (Request.Cookies["userId"] != null)
            {
                Id = int.Parse(Request.Cookies["userId"]);

            }
            Console.WriteLine("Inside Addnew address 2");
            Console.WriteLine(Id);

            useradd.UserId = Id;
            useradd.IsDefault = false;
            useradd.IsDeleted = false;
            User user = _helperlandContext.Users.Where(x => x.UserId == Id).FirstOrDefault();
            useradd.Email = user.Email;
            var result = _helperlandContext.UserAddresses.Add(useradd);
            Console.WriteLine("Inside Addnew address 3");
            _helperlandContext.SaveChanges();

            Console.WriteLine("Inside Addnew address 4");
            if (result != null)
            {
                return Ok(Json("true"));
            }

            return Ok(Json("false"));
        }




    } 
}
