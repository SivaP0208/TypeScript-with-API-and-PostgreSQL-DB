using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalStoreAPI.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace MedicalStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/Order
        [HttpGet]
        public IActionResult GetOrder()
        {
            return Ok(_dbContext.orders.ToList());
        }

        // GET: api/Order/1
        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(order => order.OrderID == id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        //Adding a new order
        // POST: api/Order
        [HttpPost]
        public IActionResult PostOrder([FromBody] OrderInfo order)
        {
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();

            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        // Updating an existing order
        // PUT: api/Order/1
        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] OrderInfo order)
        {
            var orderOld = _dbContext.orders.FirstOrDefault(order => order.OrderID == id);
            if (orderOld == null)
            {
                return NotFound();
            }
            orderOld.UserID = order.UserID;
            orderOld.MedicineID = order.MedicineID;
            orderOld.MedicineCount = order.MedicineCount;
            orderOld.TotalPrice = order.TotalPrice;
            orderOld.OrderDate = order.OrderDate;
            orderOld.OrderStatus = order.OrderStatus;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing order
        // DELETE: api/Order/1
        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(order => order.OrderID == id);
            if (order == null)
            {
                return NotFound();
            }
            _dbContext.orders.Remove(order);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}