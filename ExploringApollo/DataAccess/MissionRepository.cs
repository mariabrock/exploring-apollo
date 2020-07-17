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

        public Mission GetMissionById(int missionId)
        {
            var sql = @"select * 
                        from Mission
                        where missionId = @missionId";

            var parameters = new { MissionId = missionId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Mission>(sql, parameters);
            }
        }
    }
}
