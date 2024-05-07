using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalStore;
using MedicalStoreAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MedicalStoreAPI.Controllers
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<UserInfo> users { get; set; }
        public DbSet<Medicine> medicines { get; set; }
        public DbSet<OrderInfo> orders { get; set; }
    }
}