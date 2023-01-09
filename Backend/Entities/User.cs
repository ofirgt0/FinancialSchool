using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
namespace FinancialSchool.shared.models
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Type { get; set; }
        public string Class{ get; set; }
    }
}
