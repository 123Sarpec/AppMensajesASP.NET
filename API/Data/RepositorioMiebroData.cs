using System;
using API.Database;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class RepositorioMiebroData(DBContext context) : RepositorioMiebro
{
    public void Actualizar(Miembros miembros)
    {
        // throw new NotImplementedException();
        context.Entry(miembros).State = EntityState.Modified;
    }

    public async Task<IReadOnlyList<Fotos>> getFotosForMiembrosAsync(string MiembrosId)
    {
        // throw new NotImplementedException();
        return await context.Miembros.Where(x => x.Id == MiembrosId).SelectMany(x => x.Fotos).ToListAsync();
    }

    public async Task<IReadOnlyList<Miembros>> GetMiembrosAsync()
    {
        // throw new NotImplementedException();
        return await context.Miembros.ToListAsync();

    }

    public async Task<Miembros?> GetMiembrosByIdAsync(string id)
    {
        // throw new NotImplementedException();
        return await context.Miembros.FindAsync(id);
    }

    public async Task<bool> SaveAllAsync()
    {
        // throw new NotImplementedException();
        return await context.SaveChangesAsync() > 0;
    }
}