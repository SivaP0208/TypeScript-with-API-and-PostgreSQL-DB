using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace API.Data
{
    [Table("userdetails", Schema = "public")]
    public class UserDetails
    {
        [Key]
        public int CardNumber { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public double WalletBalance { get; set; }
    }
}