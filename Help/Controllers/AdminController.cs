﻿using Help.Data;
using Help.Models;
using Help.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Help.Controllers
{
    public class AdminController : Controller
    {
        private readonly HelpContext _helperlandContext;
        public AdminController(HelpContext helperlandContext)
        {
            _helperlandContext = helperlandContext;
        }

        public IActionResult AdminDashboard()
        {
            int? Id = HttpContext.Session.GetInt32("userId");
            if (Id == null)
            {
                Id = Convert.ToInt32(Request.Cookies["userId"]);
            }

            if (Id == null)
            {
                return RedirectToAction("Index", "Home");
            }
            User user = _helperlandContext.Users.FirstOrDefault(x => x.UserId == Id);
            int userTypeId = user.UserTypeId;
            if (userTypeId != 3)
            {
                return RedirectToAction("Index", "Home");

            }

            ViewBag.Name = user.FirstName;
            ViewBag.Lname = user.LastName;
            ViewBag.UserType = user.UserTypeId;

            return View();

        }







        public JsonResult GetServiceRequest(AdminServiceFilter filter)
        {
            Console.WriteLine(filter.ServiceRequestId);

            List<Adminservicereq> tabledata = new List<Adminservicereq>();

            var serviceRequestsList = _helperlandContext.ServiceRequests.ToList().OrderByDescending(x => x.ServiceRequestId);

            foreach (ServiceRequest temp in serviceRequestsList)
            {

                Console.WriteLine(temp.ServiceRequestId);
                if (checkServiceRequest(temp, filter))
                {


                    Adminservicereq data = new Adminservicereq();

                    data.ServiceRequestId = temp.ServiceRequestId;
                    data.Date = temp.ServiceStartDate.ToString("dd/MM/yyyy");
                    data.StartTime = temp.ServiceStartDate.AddHours(0).ToString("HH:mm ");
                    var totaltime = (double)(temp.ServiceHours + temp.ExtraHours);
                    data.EndTime = temp.ServiceStartDate.AddHours(totaltime).ToString("HH:mm ");
                    data.Status = (int)temp.Status;
                    /* customer */

                    User customer = _helperlandContext.Users.FirstOrDefault(x => x.UserId == temp.UserId);

                    data.CustomerName = customer.FirstName + " " + customer.LastName;



                    /*address */

                    ServiceRequestAddress serviceRequestAddress = _helperlandContext.ServiceRequestAddresses.FirstOrDefault(x => x.ServiceRequestId == temp.ServiceRequestId);

                    data.Address = serviceRequestAddress.AddressLine1 + " " + serviceRequestAddress.AddressLine2 + "," + serviceRequestAddress.City + "-" + serviceRequestAddress.PostalCode;

                    data.ZipCode = temp.ZipCode;


                    if (temp.ServiceProviderId != null)
                    {
                        User sp = _helperlandContext.Users.FirstOrDefault(x => x.UserId == temp.ServiceProviderId);

                        data.ServiceProvider = sp.FirstName + " " + sp.LastName;
                        data.UserProfilePicture = sp.UserProfilePicture;


                        decimal rating;

                        if (_helperlandContext.Ratings.Where(x => x.RatingTo == temp.ServiceProviderId).Count() > 0)
                        {
                            rating = _helperlandContext.Ratings.Where(x => x.RatingTo == temp.ServiceProviderId).Average(x => x.Ratings);
                        }
                        else
                        {
                            rating = 0;
                        }
                        data.AverageRating = (float)decimal.Round(rating, 1, MidpointRounding.AwayFromZero);

                    }


                    tabledata.Add(data);
                }


            }

            return Json(tabledata);
        }

        Boolean checkServiceRequest(ServiceRequest req, AdminServiceFilter filter)
        {
            var user = _helperlandContext.Users.FirstOrDefault(x => x.UserId == req.UserId);


            if (filter.ServiceRequestId != null)
            {
                if (req.ServiceRequestId != filter.ServiceRequestId)
                {
                    return false;
                }
            }
            if (filter.CustomerName != null)
            {

                var name = user.FirstName + " " + user.LastName;
                if (!name.Contains(filter.CustomerName))
                {
                    return false;
                }
            }
            if (filter.ServiceProviderName != null)
            {
                User sp = _helperlandContext.Users.FirstOrDefault(x => x.UserId == req.ServiceProviderId);
                if (sp != null)
                {
                    var name = sp.FirstName + " " + sp.LastName;

                    if (!name.Contains(filter.ServiceProviderName))
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            if (filter.Status != null)
            {
                if (req.Status != filter.Status)
                {
                    return false;
                }
            }
            if (filter.FromDate != null)
            {
                DateTime dateTime = Convert.ToDateTime(filter.FromDate);
                if (!(req.ServiceStartDate >= dateTime))
                {
                    return false;
                }

            }
            if (filter.ToDate != null)
            {
                var reqEndDate = req.ServiceStartDate.AddHours((double)(req.ServiceHours + req.ExtraHours));

                DateTime dateTime = Convert.ToDateTime(filter.ToDate);

                if (!(reqEndDate <= dateTime))
                {
                    return false;
                }
            }


            return true;



        }



        public JsonResult GetUserData(AdminUserMngFilter filter)
        {

            var user = _helperlandContext.Users.ToList();

            List<User> result = new List<User>();

            foreach (User temp in user)
            {
                if (checkUserFilter(temp, filter))
                {

                    result.Add(temp);
                }
            }


            return Json(result);

        }



        public bool checkUserFilter(User user, AdminUserMngFilter filter)
        {

            //Console.WriteLine(filter.ToDate);
            //Console.WriteLine(user.CreatedDate);

            if (filter.Name != null)
            {

                var name = user.FirstName + " " + user.LastName;
                if (!name.Contains(filter.Name))
                {
                    return false;
                }
            }

            if (filter.UserType != null)
            {
                if (user.UserTypeId != filter.UserType)
                {
                    return false;
                }
            }

            if (filter.Phone != null)
            {
                var phone = user.Mobile;
                if (!phone.Contains(filter.Phone))
                {
                    return false;
                }
            }

            if (filter.PostalCode != null)
            {
                if (user.ZipCode != filter.PostalCode)
                {
                    return false;
                }
            }



            return true;

        }



        public string UserEdit(User Id)
        {
            Console.WriteLine(Id.UserId);
            User user = _helperlandContext.Users.FirstOrDefault(x => x.UserId == Id.UserId);

            var resultString = "Error";

            if (user.IsApproved == false)
            {
                user.IsApproved = true;
                user.IsActive = true;

                resultString = "Service Provider Approved and Activated";
            }
            else if (user.IsActive == false)
            {
                user.IsActive = true;

                resultString = "User Activated";
            }
            else
            {
                user.IsActive = false;

                resultString = "User Deactivated";
            }

            var result = _helperlandContext.Users.Update(user);
            _helperlandContext.SaveChanges();

            if (result != null)
            {
                return resultString;
            }

            return "Error occured in DataBase, try again";


        }








        public JsonResult GetServEditData(ServiceRequest Id)
        {
            Console.WriteLine(Id.ServiceRequestId);
             

            AdminEditPopUp adminPopUp= new AdminEditPopUp();

            adminPopUp.address = _helperlandContext.ServiceRequestAddresses.FirstOrDefault(x => x.ServiceRequestId == Id.ServiceRequestId);

            DateTime starttime = _helperlandContext.ServiceRequests.Where(x => x.ServiceRequestId == Id.ServiceRequestId).Select(x => x.ServiceStartDate).FirstOrDefault();
            
            adminPopUp.Date = starttime.ToString("MM-dd-yyyy");

            adminPopUp.StartTime = starttime.ToString("HH:mm");

            return Json(adminPopUp);



        }




        public JsonResult UpdateServiceReq(AdminEditPopUp data)
        {
            ServiceRequest serviceRequest = _helperlandContext.ServiceRequests.FirstOrDefault(x => x.ServiceRequestId == data.ServiceRequestId);

            DateTime dateTime = Convert.ToDateTime(data.Date);
            serviceRequest.ServiceStartDate = dateTime;






            ServiceRequestAddress serviceRequestAddress = _helperlandContext.ServiceRequestAddresses.FirstOrDefault(x => x.ServiceRequestId == data.ServiceRequestId);
            Console.WriteLine(data.ServiceRequestId);


            serviceRequestAddress.AddressLine1 = data.address.AddressLine1;
            serviceRequestAddress.AddressLine2 = data.address.AddressLine2;

            serviceRequestAddress.PostalCode = data.address.PostalCode;
            serviceRequestAddress.City = data.address.City;
            serviceRequestAddress.State = data.address.State;

            var result2 = _helperlandContext.ServiceRequestAddresses.Update(serviceRequestAddress);
            _helperlandContext.SaveChanges();
            var result1 = _helperlandContext.ServiceRequests.Update(serviceRequest);
            _helperlandContext.SaveChanges();

            ServiceRequest request = _helperlandContext.ServiceRequests.FirstOrDefault(x => x.ServiceRequestId == data.ServiceRequestId);

            if (result1 != null && result2 != null)
            {

                User SP = _helperlandContext.Users.FirstOrDefault(u => u.UserId == request.ServiceProviderId);

                if (SP != null)
                {

                    string to = SP.Email;
                    string subject = "Service Rescheduled/Updated";
                    string body = "<h1>Service with ID " + data.ServiceRequestId + " has been Rescheduled/Updated to</h1><br>" + data.Date + data.StartTime + "</h2>";
                    MailMessage msg = new MailMessage();
                    msg.To.Add(to);
                    msg.Subject = subject;
                    msg.Body = body;
                    msg.From = new MailAddress("aditrailproj@gmail.com");
                    msg.IsBodyHtml = true;
                    SmtpClient setup = new SmtpClient("smtp.gmail.com")
                    {
                        Port = 587,
                        UseDefaultCredentials = true,
                        EnableSsl = true,
                        Credentials = new System.Net.NetworkCredential("aditrailproj@gmail.com", "Luttappi@123")
                    };
                    setup.Send(msg);

                }

                User Cust = _helperlandContext.Users.FirstOrDefault(u => u.UserId == request.UserId);

                ServiceRequestAddress addrs = _helperlandContext.ServiceRequestAddresses.FirstOrDefault(u => u.ServiceRequestId == request.ServiceRequestId);

                if (Cust != null)
                {

                    string to = Cust.Email;
                    string subject = "Service Rescheduled/Updated";
                    string body = "<h1>Dear Customer your service request has been rescheduled to</h1><br><h2>" + data.Date + data.StartTime + "</h2><h1>At:<h2>" +
                                  addrs.AddressLine2 + "&nbsp;" + addrs.AddressLine1 + "&nbsp;" + addrs.City + " - " + addrs.PostalCode + "</h2></h1>";
                    MailMessage msg = new MailMessage();
                    msg.To.Add(to);
                    msg.Subject = subject;
                    msg.Body = body;
                    msg.From = new MailAddress("aditrailproj@gmail.com");
                    msg.IsBodyHtml = true;
                    SmtpClient setup = new SmtpClient("smtp.gmail.com")
                    {
                        Port = 587,
                        UseDefaultCredentials = true,
                        EnableSsl = true,
                        Credentials = new System.Net.NetworkCredential("aditrailproj@gmail.com", "Luttappi@123")
                    };
                    setup.Send(msg);
                }

                return Json("true");
            }
            else
            {
                return Json("false");
            }

        }



        [HttpPost]
        public IActionResult CancelServiceReq(ServiceRequest cancel)
        {



            Console.WriteLine(cancel.ServiceRequestId);
            ServiceRequest cancelService = _helperlandContext.ServiceRequests.FirstOrDefault(x => x.ServiceRequestId == cancel.ServiceRequestId);
            cancelService.Status = 4;


            var result = _helperlandContext.ServiceRequests.Update(cancelService);
            _helperlandContext.SaveChanges();

            if (result != null)
            {

                if (cancelService.ServiceProviderId != null)
                {

                    User temp = _helperlandContext.Users.FirstOrDefault(x => x.UserId == cancelService.ServiceProviderId);

                    string to = temp.Email;
                    string subject = "Service Request Cancelled";
                    string body = "<h3>Service request with Id: " + cancelService.ServiceRequestId + "<br>Scheduled at " + cancelService.ServiceStartDate + "<br>has been cancelled.</h3> ";
                    MailMessage msg = new MailMessage();
                    msg.To.Add(to);
                    msg.Subject = subject;
                    msg.Body = body;
                    msg.From = new MailAddress("aditrailproj@gmail.com");
                    msg.IsBodyHtml = true;
                    SmtpClient setup = new SmtpClient("smtp.gmail.com")
                    {
                        Port = 587,
                        UseDefaultCredentials = true,
                        EnableSsl = true,
                        Credentials = new System.Net.NetworkCredential("aditrailproj@gmail.com", "Luttappi@123")
                    };
                    setup.Send(msg);

                }

                return Ok(Json("true"));
            }

            return Ok(Json("false"));
        }





        public JsonResult GetAdminRefundData(ServiceRequest Id)
        {


            Console.WriteLine(Id.ServiceRequestId);
            ServiceRequest req = _helperlandContext.ServiceRequests.FirstOrDefault(x => x.ServiceRequestId == Id.ServiceRequestId);


            var myData = new
            {
                TotalCost = req.TotalCost,
                RefundAmount = req.RefundedAmount

            };

            return Json(myData);
        }

        public string AdminRefundUpdate(ServiceRequest req)
        {
            Console.WriteLine(req.RefundedAmount);
            Console.WriteLine(req.ServiceRequestId);


            ServiceRequest obj = _helperlandContext.ServiceRequests.FirstOrDefault(x => x.ServiceRequestId == req.ServiceRequestId);


            obj.RefundedAmount = req.RefundedAmount;

            var result = _helperlandContext.ServiceRequests.Update(obj);

            _helperlandContext.SaveChanges();

            if (result != null)
            {

                return "true";
            }

            return "error";
        }

    }
}
