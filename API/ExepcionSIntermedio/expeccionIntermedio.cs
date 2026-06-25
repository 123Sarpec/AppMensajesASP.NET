using System;
using System.Net;
using System.Text.Json;
using API.Errors;

namespace API.ExepcionSIntermedio;

public class expeccionIntermido(RequestDelegate next, ILogger<expeccionIntermido> logger, IHostEnvironment env)
{
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (Exception error)
        {
            logger.LogError(error, "{message}", error.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            //   mandar llamar a la peticion para tener los resultados  si es error
            var Response = env.IsDevelopment()
            ? new ApiExeptin(context.Response.StatusCode, error.Message, error.StackTrace)
            : new ApiExeptin(context.Response.StatusCode, error.Message, "Erro en el servidor");

            // si los resultados son correcot pas el json 
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };
            var json = JsonSerializer.Serialize(Response, options);
            await context.Response.WriteAsync(json);

        }
    }
}