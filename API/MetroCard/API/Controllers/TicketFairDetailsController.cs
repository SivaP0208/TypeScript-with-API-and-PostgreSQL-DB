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
    public class TicketFairDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TicketFairDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/Ticket
        [HttpGet]
        public IActionResult GetTicket()
        {
            return Ok(_dbContext.tickets.ToList());
        }

        // GET: api/Ticket/1
        [HttpGet("{id}")]
        public IActionResult GetTicket(int id)
        {
            var ticket = _dbContext.tickets.FirstOrDefault(ticket => ticket.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }

        //Adding new Ticket
        // POST: api/Ticket
        [HttpPost]
        public IActionResult PostTicket([FromBody] TicketFairDetails ticket)
        {
            _dbContext.tickets.Add(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing Ticket
        // PUT: api/Ticket/1
        [HttpPut("{id}")]
        public IActionResult PutTicket(int id, [FromBody] TicketFairDetails ticket)
        {
            var ticketOld = _dbContext.tickets.FirstOrDefault(ticket => ticket.TicketID == id);
            if (ticketOld == null)
            {
                return NotFound();
            }
            ticketOld.FromLocation=ticket.FromLocation;
            ticketOld.ToLocation=ticket.ToLocation;
            ticketOld.Fair=ticket.Fair;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing Ticket
        // DELETE: api/Ticket/1
        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            var ticket = _dbContext.tickets.FirstOrDefault(ticket => ticket.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }
            _dbContext.tickets.Remove(ticket);
            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}