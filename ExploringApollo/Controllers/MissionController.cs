using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploringApollo.DataAccess;
using ExploringApollo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExploringApollo.Controllers
{
    [Route("api/mission")]
    [ApiController]
    public class MissionController : ControllerBase
    {
        MissionRepository _repository;

        public MissionController(MissionRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetMissions()
        {
            var allMissions = _repository.GetAllMissions();

            return Ok(allMissions);
        }


        [HttpGet("{missionId}")]
        public IActionResult GetSelectedMissionById(int missionId)
        {
            var mission = _repository.GetMissionById(missionId);
            if (mission == null)
            {
                return NotFound("Sorry, That mission does not exist.");
            }
            return Ok(mission);
        }

    }
}
