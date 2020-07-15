using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
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

        internal object GetAllEvents()
        {
            throw new NotImplementedException();
        }

        internal object GetEventById(int eventId)
        {
            throw new NotImplementedException();
        }
    }
}
