using EmployeeManager.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManager.Api.Repositories
{
    public class CountryStProcRepository : ICountryRepository
    {
        private readonly AppDbContext db = null;
        public CountryStProcRepository(AppDbContext db)
        {
            this.db = db;
        }

        public List<Country> SelectAll()
        {
            throw new NotImplementedException();
        }
    }
}
