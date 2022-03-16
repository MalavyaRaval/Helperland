﻿using Help.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Help.ViewModels
{
    public class BlockCustomerData
    {

        public User user { get; set; }

        public FavoriteAndBlocked favoriteAndBlocked { get; set; }

    }
}
