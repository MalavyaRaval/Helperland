﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Help.ViewModels
{
    public class ScheduleService
    {
        public DateTime Date { get; set; }

        [Required]
        public string Time { get; set; }


        public float Duration { get; set; }


        public Extra extra { get; set; }

        public String Comments { get; set; }

        public bool havePet { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public bool Remember { get; set; }
    }
}
