using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace AcmeFileUpload_API.Bus.Infra
{
    public interface IFileService
    {
        Task<Tuple<string,long,bool,string>> SaveFileAsync(IFormFile formFile,CancellationToken cancellationToken=default);
    }
}