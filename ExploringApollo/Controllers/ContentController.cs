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
    [Route("api/content")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        ContentRepository _repository;

        public ContentController(ContentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetContent()
        {
            var allContent = _repository.GetAllContent();

            return Ok(allContent);
        }

        [HttpGet("{contentId}")]
        public IActionResult GetSelectedContentById(int eventId)
        {
            var content = _repository.GetContentById(eventId);
            if (content == null)
            {
                return NotFound("Sorry, That peice of content does not exist.");
            }
            return Ok(content);
        }
    }
}
