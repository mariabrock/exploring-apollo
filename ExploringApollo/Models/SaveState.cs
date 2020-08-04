using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExploringApollo.Models
{
    public class SaveState
    {
        public int stateId { get; }
        public int userId { get; set; }
        public int missionId { get; set; }
        public int eventId { get; set; }
        public DateTime instance { get; set; }
    }
}
