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
    public class SaveStateRepository
    {
        string ConnectionString;

        public SaveStateRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("ExploringApollo");
        }

        public IEnumerable<SaveState> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<SaveState>("select * from SaveState");
            }
        }

        public SaveState GetSaveByUserId(int userId)
        {
            var sql = @"select * 
                        from SaveState
                        where userId = @userId";
            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.QueryFirstOrDefault<SaveState>(sql, parameters);
                return result;
            }
        }

        public SaveState Add(SaveState instance)
        {
            var sql = $@"
                    insert into SaveState(saveId, userId, missionId, eventId, instance)
                    output inserted. *
                    Values(@saveId, @userId, @missionId, @eventId, @instance)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<SaveState>(sql, instance);
                return result;
            }
        }
    }
}
