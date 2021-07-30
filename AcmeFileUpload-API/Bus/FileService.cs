using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using AcmeFileUpload_API.Bus.Infra;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace AcmeFileUpload_API.Bus
{
    public class FileService : IFileService
    {
        private readonly IConfiguration _configuration;
        public FileService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        public async Task<Tuple<string,long,bool,string>> SaveFileAsync(IFormFile formFile,CancellationToken cancellationToken=default)
        {
            if (cancellationToken.IsCancellationRequested)
            {
                return new Tuple<string, long, bool,string>(string.Empty, 0, false,string.Empty);
            }
            
            if (formFile.Length > 0)
            {
                //file path is the combination of folderPath + fileName
                var filePath = Path.Join(_configuration.GetValue<string>("FolderPath"),formFile.FileName);
                    
                using (var stream = File.Create(filePath))
                {
                    await formFile.CopyToAsync(stream);
                }

                return new Tuple<string, long, bool,string>(formFile.Name, formFile.Length, true,DateTime.Now.ToLongDateString());
            }
            
            return new Tuple<string, long, bool,string>(string.Empty, 0, false,string.Empty);
        }
    }
}