using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
namespace API.Data
{
    [Table("ticketfairdetails", Schema = "public")]
    public class TicketFairDetails
    {   
        [Key]
        public int TicketID { get; set; }
        public string FromLocation { get; set; }
        public string ToLocation { get; set; }
        public double Fair { get; set; }
    }
}