﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Help.Models
{
    public partial class State
    {
        public State()
        {
            Cities = new HashSet<City>();
        }

        public int Id { get; set; }
        public string StateName { get; set; }

        public virtual ICollection<City> Cities { get; set; }
    }
}
