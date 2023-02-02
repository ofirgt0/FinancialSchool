using FinancialSchool.Interfaces;
using FinancialSchool.Interfaces.Repositories;
using FinancialSchool.Models.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Repository
{
    public class ClassesRepository : IClassesRepository
    {
        private readonly IClassesSqlProvider _classesSqlProvider;

        public ClassesRepository(IClassesSqlProvider classesSqlProvider)
        {
            _classesSqlProvider = classesSqlProvider;
        }

        public async Task<IList<Class>> GetAllClassesAsync()
        {
            return await _classesSqlProvider.GetAllClassesAsync();
        }

        public async Task<Class> GetClassByIdAsync(string classId)
        {
            return await _classesSqlProvider.GetClassByIdAsync(classId);
        }

        public async Task<bool> InsertClassAsync(Class newClass)
        {
            return await _classesSqlProvider.InsertClassAsync(newClass);
        }
    }
}
