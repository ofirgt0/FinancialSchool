using FinancialSchool.Interfaces;
using FinancialSchool.Interfaces.Repositories;
using FinancialSchool.Models.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Repository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly IUsersSqlProvider _usersSqlProvider;

        public UsersRepository(IUsersSqlProvider usersSqlProvider)
        {
            _usersSqlProvider = usersSqlProvider;
        }

        public async Task<bool> DeleteUserAsync(string userName)
        {
            return await _usersSqlProvider.DeleteUserAsync(userName);
        }

        public Task<IList<User>> GetAllUsersAsync()
        {
            return _usersSqlProvider.GetAllUsersAsync();
        }

        public Task<User> GetUserByIdAsync(string UserName)
        {
            return _usersSqlProvider.GetUserByIdAsync(UserName);
        }

        public async Task<bool> InsertUserAsync(User newUser)
        {
            return await _usersSqlProvider.InsertUserAsync(newUser);
        }

        public async Task<bool> GetAuthAsync(string userName, string password)
        {
            return await _usersSqlProvider.GetAuthAsync(userName, password);
        }
    }
}
