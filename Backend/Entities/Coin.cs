using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FinancialSchool.shared.Models
{
    public class Coin
    {
        [Key]
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public string PicturePath { get; set; }
        public int Worth { get; set; }
    }
}