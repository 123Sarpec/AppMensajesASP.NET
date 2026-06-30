using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

public class Miembros

{// CRAMOS LAS PROPIEDADES DE LOS MIEMPBROS 
    public string Id { get; set; } = null!;
    public required string Email { get; set; }
    public DateOnly FechaNacimiento { get; set; }

    public string? ImagenUrl { get; set; }
    public required string Nombre { get; set; }

    public DateTime UltimoActivo { get; set; } = DateTime.UtcNow;

    public DateTime Creada { get; set; } = DateTime.UtcNow;
    public required string Genero { get; set; }
    public string? Descripcion { get; set; }
    public required string Ciudad { get; set; }
    public required string Pais { get; set; }

    // navegar las propieedades 

    public List<Fotos> Fotos { get; set; } = [];

    [ForeignKey(nameof(Id))]//migramos el id de mimbro para crear nuevo
    public Usuario usuario { get; set; } = null!;


}


