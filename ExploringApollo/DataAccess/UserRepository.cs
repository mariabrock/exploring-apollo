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

        public User GetUserByUserName(string userName)
        {
            var sql = @"
                    select *
                    from Users
                    where UserName = @userName";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserName = userName };
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }

        public User Add(User user)
        {
            var sql = @"
            insert into Users(userId, firstName, lastName, userName, email, avatarUrl)
            output inserted. *
            Values(@userId, @firstName, @lastName, @userName, @email, @avatarUrl)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<User>(sql, user);
                return result;
            }
        }
    }
}
