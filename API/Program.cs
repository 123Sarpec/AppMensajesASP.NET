
using API.Database;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;
using API.Servicios;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using API.ExepcionSIntermedio;
using API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();
builder.Services.AddDbContext<DBContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();
builder.Services.AddScoped<TokenServicio, TokenServicios>();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    var TokenKey = builder.Configuration["TokenKey"] ?? throw new Exception("TokenKey no encontrado");
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TokenKey)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }
app.UseMiddleware<expeccionIntermido>();
app.UseDeveloperExceptionPage();
// app.UseHttpsRedirection();
app.UseCors(x => x.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:4200", "https://localhost:4200"));
// app.UseAuthorization();

// especificar la autenticación
app.UseAuthentication();
// autoriazar el tocker de la base de datos
app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
try
{
    var context = app.Services.GetRequiredService<DBContext>();
    await context.Database.MigrateAsync();
    await Introducir.IntroducirUsuario(context);

}
catch (Exception error)
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    // throw new Exception("Error al migrar la base de datos", error);
    logger.LogError(error, "Error al migrar la base de datos");
}


app.Run();
