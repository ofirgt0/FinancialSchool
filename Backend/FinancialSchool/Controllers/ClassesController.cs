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
    [Route("api/Classes")]
    public class ClassesController : ControllerBase
    {
        private readonly IClassesRepository _ClassesRepository;

        public ClassesController(IClassesRepository ClassesRepository)
        {
            _ClassesRepository = ClassesRepository;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllClassesAsync()
        {
            return Ok( _ClassesRepository.GetAllClassesAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetClassesLinesByClassIdAsync(string id)
        {
            return Ok(await _ClassesRepository.GetClassByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult> InsertClassesAsync([FromBody] Class newClass)
        {
            return Ok(await _ClassesRepository.InsertClassAsync(newClass));
        }
    }
}
