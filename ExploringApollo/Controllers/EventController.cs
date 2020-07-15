using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploringApollo.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExploringApollo.Controllers
{
    [Route("api/[event]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        EventRepository _repository;

        public EventController(EventRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetMissions()
        {
            var allEvents = _repository.GetAllEvents();

            return Ok(allEvents);
        }

        [HttpGet("{missionId}")]
        public IActionResult GetSelectedEventById(int eventId)
        {
            var anEvent = _repository.GetEventById(eventId);
            if (anEvent == null)
            {
                return NotFound("Sorry, That event does not exist.");
            }
            return Ok(anEvent);
        }
    }
}
