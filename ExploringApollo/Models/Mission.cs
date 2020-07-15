using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExploringApollo.Models
{
    public class Mission
    {
        public int missionId { get; set; }
        public string missionName { get; set; }
        public string patchUrl { get; set; }
        public DateTime missionStart { get; set; }
        public DateTime missionEnd { get; set; }
        public string commander { get; set; }
        public string lmPilot { get; set; }
        public string mPilot { get; set; }
        public int profileId { get; set; }

    }
}
