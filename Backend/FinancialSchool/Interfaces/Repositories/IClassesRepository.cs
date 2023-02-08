using FinancialSchool.Models.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Interfaces.Repositories
{
    public interface IClassesRepository
    {
        Task<IList<Class>> GetAllClassesAsync();
        Task<Class> GetClassByIdAsync(string classId);
        Task<bool> InsertClassAsync(Class newClass);
        Task<bool> ChangeClassCashByDifferenceAsync(string classId, int diff);
    }
}
