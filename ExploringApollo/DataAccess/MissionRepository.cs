using Dapper;
using ExploringApollo.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;

namespace ExploringApollo.DataAccess
{
    public class MissionRepository
    {
        string ConnectionString;

        public MissionRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("ExploringApollo");
        }

        public IEnumerable<Mission> GetAllMissions()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Mission>("select * from Mission");
            }
        }

        internal object GetMissionById(object id)
        {
            var sql = @"select * 
                        from Misison
                        where missionId = @id";

            var parameters = new { MissionId = id };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Mission>(sql, parameters);
            }
        }
    }
}
