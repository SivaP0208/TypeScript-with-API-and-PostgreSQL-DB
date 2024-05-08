using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace API.Data
{
    [Table("traveldetails", Schema = "public")]
    public class TravelDetails
    {
        [Key]
        public int TravelID { get; set; }
        public int CardNumber { get; set; }
        public string FromLocation { get; set; }
        public string ToLocation { get; set; }
        public DateTime Date { get; set; }
        public double Cost { get; set; }
        public string BookingStatus { get; set; }
    }
}