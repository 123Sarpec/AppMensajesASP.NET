namespace API.Entities;

public class Fotos

{// CRAMOS LAS PROPIEDADES DE LOS MIEMPBROS 
    public int Id { get; set; }
    // public  FechaNacimiento { get; set; }

    public string? PublicidadId { get; set; }
    // public required string Email { get; set;}
    public required string Url { get; set; }

    // public DateTime UltimoActivo { get; set; } = DateTime.UtcNow;

    // public DateTime Creada { get; set; } = DateTime.UtcNow;
    // public required string Genero { get; set; }
    // public required string Descripcion { get; set; }
    // public required string Cuidad { get; set; }
    // public required string Pais { get; set; }
    // navegar las propieedades 
    // public Usuario usuario { get; set; } = null!;

    // navegar en las propiedades  de miembros
    public Miembros Miembro { get; set; } = null!;

    public string MiembrosId { get; set; } = null!;
}


