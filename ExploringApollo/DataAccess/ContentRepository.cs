﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
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

        internal object GetAllContent()
        {
            throw new NotImplementedException();
        }

        internal object GetContentById(int eventId)
        {
            throw new NotImplementedException();
        }
    }
}
