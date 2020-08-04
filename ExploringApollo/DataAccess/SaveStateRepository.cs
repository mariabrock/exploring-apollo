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

        public SaveState MostRecentInstance(int userId)
        {
            var sql = $@"
                        Select * 
                        FROM SaveState 
                        WHERE instance = (select max(instance) 
                           from SaveState 
                           where userId = @userId)";

            var parameters = new { UserId = userId };
            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<SaveState>(sql, parameters);
                return result;
            }
        }

        public SaveState Add(SaveState objectToAdd)
        {
            var sql = $@"
                    insert into SaveState(userId, missionId, eventId, instance)
                    output inserted. *
                    Values(@userId, @missionId, @eventId, @instance)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<SaveState>(sql, objectToAdd);
                return result;
            }
        }
    }
}
