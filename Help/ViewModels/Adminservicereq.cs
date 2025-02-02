﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Help.ViewModels
{
    public class Adminservicereq
    {

        public int ServiceRequestId { get; set; }

        public string Date { get; set; }

        public string StartTime { get; set; }

        public string EndTime { get; set; }

        public string CustomerName { get; set; }

        public string Address { get; set; }

        public string ZipCode { get; set; }

        public string ServiceProvider { get; set; }

        public string UserProfilePicture { get; set; }

        public decimal SPRatings { get; set; }

        public float AverageRating { get; set; }

        public int Status { get; set; }

    }
}
