using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Help.ViewModels
{
    public class Address
    {
        [Required]
        public int AddressId { get; set; }
        [Required]
        public string AddressLine1 { get; set; }
        [Required]
        public string AddressLine2 { get; set; }

        public string City { get; set; }
        [Required]
        public string PostalCode { get; set; }
        [Required]
        public string Mobile { get; set; }

        public bool isDefault { get; set; }
    }
}
