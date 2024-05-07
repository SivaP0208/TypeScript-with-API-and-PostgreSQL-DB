using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace MedicalStoreAPI.Data
{
    [Table("orderinfo", Schema = "public")]
    public class OrderInfo
    {
        [Key]
        public int OrderID { get; set; }
        public int UserID { get; set; }
        public int MedicineID { get; set; }
        public int MedicineCount { get; set; }
        public double TotalPrice { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderStatus { get; set; }
    }
}