using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.shared.Models
{
    public class Class
    {
        [Key]
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public int TotalCash { get; set; }
        public int TeacherId { get; set; }
    }
}