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
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _repository;
        public UserController(UserRepository repository)
        {
            _repository = repository;
        }

        //api/user
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var allUsers = _repository.GetAll();
            return Ok(allUsers);
        }

        [HttpGet("userId/{userId}")]
        public IActionResult GetUserByUserId(int userId)
        {
            var user = _repository.GetUserById(userId);
            if (user ==null)
            {
                return NotFound("Sorry, that user does not exist");
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUser(User userToAdd)
        {
            var existingUser = _repository.GetUserByUserName(userToAdd.username);
            if (existingUser == null)
            {
                var newUser = _repository.Add(userToAdd);
                return Created("", newUser);
            }

            return Ok(existingUser);
        }

    }
}
