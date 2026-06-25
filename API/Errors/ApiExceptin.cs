using System;

namespace API.Errors;


public class ApiExeptin
{
    public ApiExeptin(int statusCode, string message, string v)
    {
        StatusCode = statusCode;
        Message = message;
        V = v;
    }

    public int StatusCode { get; }
    public string Message { get; }
    public string V { get; }
}