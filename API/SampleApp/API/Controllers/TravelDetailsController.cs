using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TravelDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/Travel
        [HttpGet]
        public IActionResult GetTravel()
        {
            return Ok(_dbContext.travels.ToList());
        }

        // GET: api/Travel/1
        [HttpGet("{id}")]
        public IActionResult GetTravel(int id)
        {
            var travel = _dbContext.travels.FirstOrDefault(travel => travel.TravelID == id);
            if (travel == null)
            {
                return NotFound();
            }
            return Ok(travel);
        }

        //Adding new Travel
        // POST: api/Travel
        [HttpPost]
        public IActionResult PostTravel([FromBody] TravelDetails travel)
        {
            _dbContext.travels.Add(travel);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing Travel
        // PUT: api/Travel/1
        [HttpPut("{id}")]
        public IActionResult PutTravel(int id, [FromBody] TravelDetails travel)
        {
            var travelOld = _dbContext.travels.FirstOrDefault(travel => travel.TravelID == id);
            if (travelOld == null)
            {
                return NotFound();
            }
            travelOld.CardNumber=travel.CardNumber;
            travelOld.FromLocation=travel.FromLocation;
            travelOld.ToLocation=travel.ToLocation;
            travelOld.Date=travel.Date;
            travelOld.Cost=travel.Cost;
            travelOld.BookingStatus=travel.BookingStatus;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing Travel
        // DELETE: api/Travel/1
        [HttpDelete("{id}")]
        public IActionResult DeleteTravel(int id)
        {
            var travel = _dbContext.travels.FirstOrDefault(travel => travel.TravelID == id);
            if (travel == null)
            {
                return NotFound();
            }
            _dbContext.travels.Remove(travel);
            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}