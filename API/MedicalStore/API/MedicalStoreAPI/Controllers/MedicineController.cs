using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalStoreAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace MedicalStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicineController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public MedicineController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/Medicine
        [HttpGet]
        public IActionResult GetMedicine()
        {
            return Ok(_dbContext.medicines.ToList());
        }

        // GET: api/Medicine/1
        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        //Adding a new medicine
        // POST: api/Medicine
        [HttpPost]
        public IActionResult PostMedicine([FromBody] Medicine medicine)
        {
            _dbContext.medicines.Add(medicine);
            _dbContext.SaveChanges();

            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        // Updating an existing medicine
        // PUT: api/Medicine/1
        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] Medicine medicine)
        {
            var medicineOld = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicineOld == null)
            {
                return NotFound();
            }
            medicineOld.MedicineName = medicine.MedicineName;
            medicineOld.AvailableCount = medicine.AvailableCount;
            medicineOld.Price = medicine.Price;
            medicineOld.DateOfExpiry = medicine.DateOfExpiry;

            _dbContext.SaveChanges();

            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing medicine
        // DELETE: api/Medicine/1
        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _dbContext.medicines.Remove(medicine);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}