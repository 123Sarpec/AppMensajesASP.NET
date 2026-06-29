using System;
using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Database;

public class DBContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Miembros> Miembros { get; set; }
    public DbSet<Fotos> Fotos { get; set; }
    // public DbSet<Usuario> Usuarios { get; set; }

}