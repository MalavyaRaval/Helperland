using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Help.ViewModels
{
    public class Setupservice
    {
        [Required(ErrorMessage = "Please Enter Valid Zip Code")]
        [StringLength(6, ErrorMessage = "Please Enter Valid Postal Code", MinimumLength = 6)]
        public string ZipCode { get; set; }
    }
}
