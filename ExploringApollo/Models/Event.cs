using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExploringApollo.Models
{
    public class Event
    {
        public int eventId { get; set; }
        public string eventName { get; set; }
        public int userId { get; set; }
        public DateTime dateTime { get; set; }
    }
}
