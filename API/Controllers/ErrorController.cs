using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ErrorController : BaseApiController
{   /*El resultado es satisfacitorio*/
    [HttpGet("auth")]
    public IActionResult GetAuth()
    {
        return Unauthorized();
    }
    /*Error en la busqueda del resultado.*/
    [HttpGet("Error_Verificacion")]
    public IActionResult GetNotFound () {
        return NotFound();
    }
    /*No encotro resultado en el servidor*/
    [HttpGet("Error_servidor")]
    public IActionResult GetServerError() {
        throw new Exception("Ocurrio un error en el servidor..");
    }

    /*Erro en la peticion de la respuesta*/
    [HttpGet("Respuesta_incorrecta")]
    public IActionResult GetBadRequest() {
        throw new Exception("La solicitud es incorrecta...");
    }
}