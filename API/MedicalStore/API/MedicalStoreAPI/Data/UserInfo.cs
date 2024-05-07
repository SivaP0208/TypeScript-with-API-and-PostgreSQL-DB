using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
namespace MedicalStore;
[Table("userinfo", Schema = "public")]
public class UserInfo
{
    [Key]
    public int UserID { get; set; }
    public string UserName { get; set; }
    public string UserMailID { get; set; }
    public string UserPassword { get; set; }
    public double WalletBalance { get; set; }
}