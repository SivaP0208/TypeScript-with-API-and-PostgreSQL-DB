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
    public class BookDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BookDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/Book
        [HttpGet]
        public IActionResult GetBook()
        {
            return Ok(_dbContext.books.ToList());
        }

        // GET: api/Book/1
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var book = _dbContext.books.FirstOrDefault(book => book.BookID == id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        //Adding new book
        // POST: api/book
        [HttpPost]
        public IActionResult PostBook([FromBody] BookDetails book)
        {
            _dbContext.books.Add(book);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing book
        // PUT: api/book/1
        [HttpPut("{id}")]
        public IActionResult PutBook(int id, [FromBody] BookDetails book)
        {
            var bookOld = _dbContext.books.FirstOrDefault(book => book.BookID == id);
            if (bookOld == null)
            {
                return NotFound();
            }
            bookOld.BookName=book.BookName;
            bookOld.AuthorName=book.AuthorName;
            bookOld.BookCount=book.BookCount;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing book
        // DELETE: api/book/1
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = _dbContext.books.FirstOrDefault(book => book.BookID == id);
            if (book == null)
            {
                return NotFound();
            }
            _dbContext.books.Remove(book);
            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}