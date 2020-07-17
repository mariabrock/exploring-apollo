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
    public class ContentRepository
    {
        string ConnectionString;

        public ContentRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("ExploringApollo");
        }

        public IEnumerable<Content> GetAllContent()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Content>("select * from Content");
            }
        }

        public Content GetContentById(int contentId)
        {
            var sql = @"select * 
                        from Content
                        where contentId = @contentId";

            var parameters = new { ContentId = contentId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Content>(sql, parameters);
            }
        }
    }
}
