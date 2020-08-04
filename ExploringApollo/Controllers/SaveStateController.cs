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
    [Route("api/saveprogress")]
    [ApiController]
    public class SaveStateController : ControllerBase
    {
        SaveStateRepository _repository;

        public SaveStateController(SaveStateRepository repository)
        {
            _repository = repository;
        }

        //api/saveprogress
        [HttpGet]
        public IActionResult GetAllInstances()
        {
            var allInstances = _repository.GetAll();
            return Ok(allInstances);
        }

        [HttpGet("mostrecent/{userId}")]
        public IActionResult GetMostRecentUserInstance(int userId)

        {
            var user = _repository.MostRecentInstance(userId);
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddSave(SaveState objectToAdd)
        {
            var newSave = _repository.Add(objectToAdd);
            return Ok(newSave);
        }
        
    }
}
