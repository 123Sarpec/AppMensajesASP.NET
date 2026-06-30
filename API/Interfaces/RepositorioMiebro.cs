using System;
using API.Entities;

namespace API.Interfaces;

public interface RepositorioMiebro
{
    void Actualizar(Miembros miembros);

    // gaurdar los datos de manera boleano 
    Task<bool> SaveAllAsync();
    Task<IReadOnlyList<Miembros>> GetMiembrosAsync();
    Task<Miembros?> GetMiembrosByIdAsync(string id);
    Task<IReadOnlyList<Fotos>> getFotosForMiembrosAsync(string MiembrosId);
}
