﻿
using EmployeeManager.Api.Models;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManager.Api.Repositories
{
    public class EmployeeSqlRepository : IEmployeeRepository
    {
        private readonly AppDbContext db = null;
        public EmployeeSqlRepository(AppDbContext db)
        {
            this.db = db;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Insert(Employee emp)
        {
            throw new NotImplementedException();
        }

        public List<Employee> SelectAll()
        {
            List<Employee> data = db.Employees.FromSqlRaw("SELECT EmployeeID, FirstName, LastName, Title, BirthDate, HireDate, Country, Notes FROM Employees ORDER BY EmployeeID ASC").ToList();
            return data;
        }

        public Employee SelectByID(int id)
        {
            Employee emp = db.Employees.FromSqlRaw("SELECT EmployeeID, FirstName, LastName, Title, BirthDate, HireDate, Country, Notes FROM Employees WHERE EmployeeID = {0}", id).SingleOrDefault();
            return emp;
        }

        public void Update(Employee emp)
        {
            int count = db.Database.ExecuteSqlRaw("UPDATE Employees SET FirstName ={ 0}, LastName ={ 1}, Title ={ 2}, BirthDate ={ 3}, HireDate ={ 4}, Country ={ 5}, Notes ={ 6}            WHERE EmployeeID = { 7 }", emp.FirstName, emp.LastName, emp.Title, emp.BirthDate, emp.HireDate, emp.Country, emp.Notes, emp.EmployeeID);        
        }
    }
}
