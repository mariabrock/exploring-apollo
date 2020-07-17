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
    public class EventRepository
    {
        string ConnectionString;

        public EventRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("ExploringApollo");
        }

        public  IEnumerable<Event> GetAllEvents()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Event>("select * from Event");
            }
        }

        public Event GetEventById(int eventId)
        {
            var sql = @"select * 
                        from Event
                        where eventId = @eventId";

            var parameters = new { EventId = eventId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Event>(sql, parameters);
            }
        }
    }
}
