using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SuperCoolApp
{
  [Route("api/[controller]")]
  public class HeroesController : Controller
  {
    // GET: api/values
    [HttpGet]
    public IEnumerable<string> Get()
    {
      string[] result = new string[] { "{ id: 0, name: 'Zero' }", "{ id: 11, name: 'Mr. Nice' }", "{ id: 12, name: 'Narco' }", "{ id: 13, name: 'Bombasto' }", "{ id: 14, name: 'Celeritas' }", "{ id: 15, name: 'Magneta' }", "{ id: 16, name: 'RubberMan' }", "{ id: 17, name: 'Dynama' }", "{ id: 18, name: 'Dr IQ' }", "{ id: 19, name: 'Magma' }", "{ id: 20, name: 'Tornado' }" };
      

      return result;
    }
  }
}
