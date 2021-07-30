using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AcmeFileUpload.API.Bus.Infra;
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
        private readonly IConfiguration _configuration;
        private readonly IFileService _fileService;
        public FileController(IConfiguration configuration, IFileService fileService)
        {
            _configuration = configuration;
            _fileService = fileService;
        }

        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> UploadAsync(IFormCollection formCollection)
        {
            var size = formCollection.Files.Sum(f => f.Length);

            foreach (var formFile in formCollection.Files)
            {
                if (formFile.Length > 0)
                {
                    var filePath = Path.Join(Environment.CurrentDirectory,_configuration.GetValue<string>("UploadedFilePath"),formFile.FileName);
                    
                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }
            
            return Ok(new { count = formCollection.Count, size });
        }
    }
}