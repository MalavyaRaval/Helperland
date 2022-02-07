using Helperland.Data;
using Helperland.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data;
using System.Linq;
using System.Net.Mail;


namespace Helperland.Controllers
{
    public class UserManage : Controller
    {
        private readonly HelperlandContext _helperlandContext;
        public UserManage(HelperlandContext helperlandContext)
        {
            _helperlandContext = helperlandContext;
        }
        public IActionResult Signup()
        {
            User user = new User();
            return View(user);
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Signup(User user)
        {

            if (_helperlandContext.Users.Where(x => x.Email == user.Email).Count() == 0 && _helperlandContext.Users.Where(x => x.Mobile == user.Mobile).Count() == 0)
            {
                user.UserTypeId = 1;
                user.CreatedDate = DateTime.Now;
                user.ModifiedDate = DateTime.Now;
                user.IsRegisteredUser = true;
                user.ModifiedBy = 123;

                _helperlandContext.Users.Add(user);
                _helperlandContext.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.message = "User already exist.";
            }
            return View();

        }
        public IActionResult BecomePro()
        {
            return View();
        }

        [HttpPost]
        public IActionResult BecomePro(User signup)
        {

            if (_helperlandContext.Users.Where(x => x.Email == signup.Email).Count() == 0 && _helperlandContext.Users.Where(x => x.Mobile == signup.Mobile).Count() == 0)
            {
                //signup.UserTypeId = 2;
                signup.CreatedDate = DateTime.Now;
                signup.ModifiedDate = DateTime.Now;
                signup.IsRegisteredUser = true;
                signup.ModifiedBy = 123; 

                _helperlandContext.Users.Add(signup);
                _helperlandContext.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.message = "User already exist.";
            }
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login(User user)
        {
            var U = _helperlandContext.Users.FirstOrDefault(x => x.Email == user.Email && x.Password == user.Password);
            if (U != null)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                TempData["SuccessMessage"] = "Your Success Message";
                return RedirectToAction("Index", "Home");
            }
            return RedirectToAction("Signup", "UserManage");
        }

        public IActionResult Forgotpassword()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Forgotpassword(ForgotPass forgotPass)
        {
            if (_helperlandContext.Users.Where(x => x.Email == forgotPass.Email).Count() > 0)
            {
                User Id = _helperlandContext.Users.FirstOrDefault(x => x.Email == forgotPass.Email);
                Id.ForgotPass = "true";
                _helperlandContext.Users.Update(Id);
                _helperlandContext.SaveChanges();
                string to = forgotPass.Email;
                string token = BCrypt.Net.BCrypt.HashPassword(forgotPass.Email);
                string subject = "Reset password";
                string body = "<p>Reset your password by click below link " +
                    "<a href='" + Url.Action("ResetPassword", "Registration", new { userid = Id.UserId, token = token }, "https") + "'>Reset Password</a></p>";
                MailMessage msg = new MailMessage();
                msg.To.Add(to);
                msg.Subject = subject;
                msg.Body = body;
                msg.From = new MailAddress("luttu969a@gmail.com");
                msg.IsBodyHtml = true;
                SmtpClient setup = new SmtpClient("smtp.gmail.com");
                setup.Port = 587;
                setup.UseDefaultCredentials = true;
                setup.EnableSsl = true;
                setup.Credentials = new System.Net.NetworkCredential("username", "password");
                setup.Send(msg);
                TempData["add"] = "alert show alert-success";
                TempData["message"] = "mail successfully!";
                return RedirectToAction("Index", "Home", new { ForgetModal = "true" });
            }
            else
            {
                TempData["add"] = "alert show";
                TempData["fail"] = "mail is not found";
                return RedirectToAction("Index", "Home", new { ForgetModal = "true" });
            }

        }

        public IActionResult Resetpassword()
        {
            return View();
        }

        


        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index", "Home", new { loginModal = "true" });
        }

    }
}
