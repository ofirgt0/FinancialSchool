﻿

using FinancialSchool.Interfaces;
using FinancialSchool.Models.Dal;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialSchool.Lib.SqlProviders
{
    public class UsersSqlProvider : IUsersSqlProvider
    {
        private readonly FinancialSchoolContext _context;

        public UsersSqlProvider(FinancialSchoolContext context)
        {
            _context = context;
        }

        public async Task<bool> DeleteUserAsync(string userName)
        {
            var userToDelete = _context.Users.First(user => user.UserName == userName);
            _context.Users.Remove(userToDelete);
            var isSuccess = await _context.SaveChangesAsync() > 0;
            return isSuccess;
        }

        public async Task<IList<User>> GetAllUsersAsync()
        {
            return _context.Users.ToList();
        }

        public async Task<User> GetUserByIdAsync(string UserName)
        {
            return _context.Users.First(user => user.UserName == UserName);
        }

        public async Task<bool> InsertUserAsync(User newUser)
        {
            _context.Users.Add(newUser);
            var isSuccess =  await _context.SaveChangesAsync() > 0;
            return isSuccess;
        }

        public async Task<bool> GetAuthAsync(string userName, string password)
        {
            var isExist = _context.Users.Any(existingUser => userName == existingUser.UserName && password == existingUser.Password);
            return isExist;
        }
    }
}