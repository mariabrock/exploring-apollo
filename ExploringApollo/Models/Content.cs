using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExploringApollo.Models
{
    public class Content
    {
        public int contentId { get; set; }
        public string contentName { get; set; }
        public int eventId { get; set; }
        public string url { get; set; }
        public string description { get; set; }
    }
}
