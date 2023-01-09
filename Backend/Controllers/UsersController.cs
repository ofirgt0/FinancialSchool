using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using FinancialSchool.shared.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [Route("Users")]
    public class UsersController : Controller
    {
        //private readonly ILogger<UsersController> _logger;

        public UsersController()
        {
          //  _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IList<User>>> GetUsersAsync()
        {
            //return _stockMarketData.GetStockByName(name);
            return Ok(new List<User>());

        }

        [HttpGet("{name}")]
        public async Task<ActionResult<Stock>> GetUsersAsync(string name)
        {
            //return _stockMarketData.GetStockByName(name);
            return Ok(new User());
        }
  
    }
}