using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FinancialSchool.shared.Models
{
    public class History
    {
        [Key]
        public int Id { get; set; }
        public string Date { get; set; }
        public string ProductId { get; set; }
        public int TransactionPrice { get; set; }
        public int ClassId { get; set; }
    }
}