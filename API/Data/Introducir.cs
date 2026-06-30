using System;
using System.Security.Cryptography;
using System.Text;
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
            return;
        }
        // using var hmac = new HMACSHA512();
        foreach (var miembro in miembros)
        {
            using var hmac = new HMACSHA512();

            var usuario = new Usuario
            {
                Id = miembro.Id,
                Email = miembro.Email,
                Nombre = miembro.Nombre,
                ImagenUrl = miembro.ImagenUrl,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("pa$$w0rd")),
                PasswordSalt = hmac.Key,
                Miembros = new Miembros
                {
                    Id = miembro.Id,
                    FechaNacimiento = miembro.FechaNacimiento,
                    Descripcion = miembro.Descripcion,
                    Email = miembro.Email,
                    Nombre = miembro.Nombre,
                    ImagenUrl = miembro.ImagenUrl,
                    Genero = miembro.Genero,
                    Ciudad = miembro.Ciudad,
                    Pais = miembro.Pais,
                    UltimoActivo = miembro.UltimoActivo,
                    Creada = miembro.Creada
                }
            };
            usuario.Miembros.Fotos.Add(new Fotos
            {
                Url = miembro.ImagenUrl!,
                MiembrosId = miembro.Id
            });
            context.Usuarios.Add(usuario);
        }
    }
}

