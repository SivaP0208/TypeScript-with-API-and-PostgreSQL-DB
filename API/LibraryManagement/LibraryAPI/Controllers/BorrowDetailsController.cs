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
    public class BorrowDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BorrowDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/Borrow
        [HttpGet]
        public IActionResult GetBorrow()
        {
            return Ok(_dbContext.borrows.ToList());
        }

        // GET: api/Borrow/1
        [HttpGet("{id}")]
        public IActionResult GetBorrow(int id)
        {
            var borrow = _dbContext.borrows.FirstOrDefault(borrow => borrow.BorrowID == id);
            if (borrow == null)
            {
                return NotFound();
            }
            return Ok(borrow);
        }

        //Adding new borrow
        // POST: api/borrow
        [HttpPost]
        public IActionResult PostBorrow([FromBody] BorrowDetails borrow)
        {
            _dbContext.borrows.Add(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing borrow
        // PUT: api/borrow/1
        [HttpPut("{id}")]
        public IActionResult PutBorrow(int id, [FromBody] BorrowDetails borrow)
        {
            var borrowOld = _dbContext.borrows.FirstOrDefault(borrow => borrow.BorrowID == id);
            if (borrowOld == null)
            {
                return NotFound();
            }
            borrowOld.BookID=borrow.BookID;
            borrowOld.UserID=borrow.UserID;
            borrowOld.BorrowBookCount=borrow.BorrowBookCount;
            borrowOld.BorrowedDate=borrow.BorrowedDate;
            borrowOld.Status=borrow.Status;
            borrowOld.PaidFineAmount=borrow.PaidFineAmount;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing borrow
        // DELETE: api/borrow/1
        [HttpDelete("{id}")]
        public IActionResult DeleteBorrow(int id)
        {
            var borrow = _dbContext.borrows.FirstOrDefault(borrow => borrow.BorrowID == id);
            if (borrow == null)
            {
                return NotFound();
            }
            _dbContext.borrows.Remove(borrow);
            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}