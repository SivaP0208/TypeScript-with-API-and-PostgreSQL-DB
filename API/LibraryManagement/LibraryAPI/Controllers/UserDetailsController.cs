using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : ControllerBase
    {

        private readonly ApplicationDBContext _dbContext;
        public UserDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/User
        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_dbContext.users.ToList());
        }

        // GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        //Adding new user
        // POST: api/user
        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing User
        // PUT: api/user/1
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] UserDetails user)
        {
            var userOld = _dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (userOld == null)
            {
                return NotFound();
            }
            userOld.UserName=user.UserName;
            userOld.Gender=user.Gender;
            userOld.MailID=user.MailID;
            userOld.Password=user.Password;
            userOld.MobileNumber=user.MobileNumber;
            userOld.Department=user.Department;
            userOld.WalletBalance=user.WalletBalance;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing User
        // DELETE: api/user/1
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            _dbContext.users.Remove(user);
            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}