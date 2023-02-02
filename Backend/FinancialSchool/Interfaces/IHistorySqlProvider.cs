using FinancialSchool.Models.Dal;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinancialSchool.Interfaces
{
    public interface IHistorySqlProvider
    {
        Task<IList<History>> GetAllHistoryAsync();
        Task<IList<History>> GetHistoryLinesByClassIdAsync(string classId);
        Task<bool> InsertHistoryAsync(History newHistoryLine);
    }
}