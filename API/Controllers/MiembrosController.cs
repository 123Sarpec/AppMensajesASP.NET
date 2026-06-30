using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Database;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;


namespace API.Controllers


// [ApiController]//clase base para la api
// [Route("api/[controller]")]//ruta de la api 

{
    public class MiembrosController(RepositorioMiebro repositorioMiebro) : BaseApiController
    {
        [HttpGet] //metodo get
        public async Task<ActionResult<IReadOnlyList<Usuario>>> GetMiembros()
        {
            // var Miembros = await context.Usuarios.ToListAsync();
            // return Miembros;
            return Ok(await repositorioMiebro.GetMiembrosAsync());
        }
        // return context.Usuarios.ToList();
        // }
        [Authorize]

        [HttpGet("{id}")]/* localhost:5103/api/Miembros/ws */
        public async Task<ActionResult<Miembros>> GetMiembro(string id)
        {
            var Miembros = await repositorioMiebro.GetMiembrosByIdAsync(id);
            // return Miembros;
            if (Miembros == null) return NotFound();
            return Miembros;
        }
        // // especificar la ruta de las fotos
        // [HttpGet("{id}/fotos")]
        // {
        // public async Task<AcceptedAtActionResult<IReadOnlyList<Fotos>>> GetMiembrosFotos(string id)

        // }
    }
}