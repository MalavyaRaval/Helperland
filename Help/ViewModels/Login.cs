﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Help.ViewModels
{
    public class Login
    {
        
        public string Email { get; set; }
       
        public string Password { get; set; }
        public bool Remember { get; set; }
    }
}  
 