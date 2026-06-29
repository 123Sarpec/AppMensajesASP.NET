using System;


namespace API.DTOCapas;

public class IntroducirUsuarioDTO
{
    public required string Id { get; set; }
    public required string Email { get; set; }
    public DateOnly FechaNacimiento { get; set; }

    public string? ImagenUrl { get; set; }
    public required string Nombre { get; set; }

    public DateTime UltimoActivo { get; set; } = DateTime.UtcNow;

    public DateTime Creada { get; set; } = DateTime.UtcNow;
    public required string Genero { get; set; }
    public string? Descripcion { get; set; }
    public required string Cuidad { get; set; }
    public required string Pais { get; set; }
    // navegar las propieedades 
    // [ForeignKey(nameof(Id))]//migramos el id de mimbro para crear nuevo
    // public Usuario usuario { get; set; } = null!;
}