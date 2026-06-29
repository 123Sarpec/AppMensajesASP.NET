using System;
using System.Text.Json;
using API.Database;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Introducir
{
    public static async Task IntroducirUsuario(DBContext context)
    {
        if (await context.Usuarios.AnyAsync()) return;

        var miembrosData = await File.ReadAllBytesAsync("Data/DatosIsertUsuario.json");
        var miembros = JsonSerializer.Deserialize<List<Miembros>>(miembrosData);

        if (miembros == null)
        {
            Console.WriteLine("no se introduce el miemembro data====");

            foreach (var miembro in miembros)
            {
                var usuario new Usuario
                {
                    Id = miembro.Id,
                    Email = miembro.Email,
                    Nombre = miembro.Nombre,
                    ImagenUrl = miembro.ImagenUrl,
                    // PasswordHash = miembro.

                }
            }
        }
    }
}