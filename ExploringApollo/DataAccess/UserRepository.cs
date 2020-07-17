using Dapper;
using ExploringApollo.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ExploringApollo.DataAccess
{
    public class UserRepository
    {
        string ConnectionString;

        public UserRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("ExploringApollo");
        }

        public IEnumerable<User> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<User>("select * from Users");
            }
        }

        public User GetUserById(int userId)
        {
            var sql = @"select * 
                        from Users
                        where userId = @userId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }
    }
}
