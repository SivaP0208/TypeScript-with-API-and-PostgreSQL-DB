using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace MedicalStoreAPI.Data
{
    [Table("medicine", Schema = "public")]
    public class Medicine
    {
        [Key]
        public int MedicineID { get; set; }
        public string MedicineName { get; set; }
        public int AvailableCount { get; set; }
        public int Price { get; set; }
        public DateTime DateOfExpiry { get; set; }
    }
}