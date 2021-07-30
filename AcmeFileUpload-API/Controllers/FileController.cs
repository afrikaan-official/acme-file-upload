using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AcmeFileUpload_API.Bus.Infra;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AcmeFileUpload.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;
        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> UploadAsync(IFormCollection formCollection,CancellationToken cancellationToken=default)
        {
            var results = new List<Tuple<string, long, bool>>();
            foreach (var formFile in formCollection.Files)
            {
                results.Add(await _fileService.SaveFileAsync(formFile, cancellationToken));
            }

            var savedFiles = results.Where(r => r.Item3)
                .Select(n => new {fileName = n.Item1, fileSize = n.Item2, success = n.Item3});
            
            return Ok(savedFiles);
        }
    }
}