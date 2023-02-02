using FinancialSchool.Interfaces;
using FinancialSchool.Interfaces.Repositories;
using FinancialSchool.Models.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Repository
{
    public class HistoryRepository : IHistoryRepository
    {
        private readonly IHistorySqlProvider _historySqlProvider;

        public HistoryRepository(IHistorySqlProvider historySqlProvider) {
            _historySqlProvider = historySqlProvider;
        }

        public async Task<IList<History>> GetAllHistoryAsync()
        {
            return await _historySqlProvider.GetAllHistoryAsync();
        }

        public async Task<IList<History>> GetHistoryLinesByClassIdAsync(string classId)
        {
            return await _historySqlProvider.GetHistoryLinesByClassIdAsync(classId);
        }

        public async Task<bool> InsertHistoryAsync(History newHistoryLine)
        {
            return await _historySqlProvider.InsertHistoryAsync(newHistoryLine);
        }
    }
}
