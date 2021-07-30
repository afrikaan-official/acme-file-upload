using System.Collections.Generic;
using System.IO;
using AcmeFileUpload_API.Bus;
using AcmeFileUpload_API.Bus.Infra;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace AcmeFileUpload_API_Test.ServiceTest
{
    public class FileServiceTest
    {
        private IFileService _fileService;
        private IConfigurationRoot _moqConfiguration;
        public FileServiceTest()
        {
            
        }

        [Fact]
        public  async void SaveFileAsync_Should_Not_Save_File_When_Empty_File_Was_Send()
        {
            //Arrange
            var inMemorySettings = new Dictionary<string, string> {
                {"FolderPath", "fake/folder/path"}};

            _moqConfiguration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            _fileService = new FileService(_moqConfiguration);
            
            //Act
            var result=await _fileService.SaveFileAsync(new FormFile(Stream.Null, 0, 0, string.Empty, string.Empty));
            
            //Assert
            Assert.False(result.Item3);
        }

    }
}