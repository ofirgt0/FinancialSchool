using FinancialSchool.Interfaces;
using FinancialSchool.Interfaces.Repositories;
using FinancialSchool.Models.Dal;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Controllers
{
    [ApiController]
    [Route("api/Users")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _usersSqlProvider;

        public UsersController(IUsersRepository usersSqlProvider)
        {
            _usersSqlProvider = usersSqlProvider;
        }
        
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            return Ok(_usersSqlProvider.GetAllUsersAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetUser(string id)
        {
            return Ok(await _usersSqlProvider.GetUserByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult> AddNewUser([FromBody] User newUser)
        {
            return Ok(await _usersSqlProvider.InsertUserAsync(newUser));
        }

        [HttpGet("Auth/{userName}/{password}")]
        public async Task<ActionResult> GetAuthAsync(string userName, string password)
        {
            return Ok(await _usersSqlProvider.GetAuthAsync(userName, password));
        }
    }
}