using FinancialSchool.Models.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Interfaces.Repositories
{
    public interface IHistoryRepository
    {
        Task<IList<History>> GetAllHistoryAsync();
        Task<IList<History>> GetHistoryLinesByClassIdAsync(string classId);
        Task<bool> InsertHistoryAsync(History newHistoryLine);
    }
}
