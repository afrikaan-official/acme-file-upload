using System;
using System.Threading;
using AcmeFileUpload_API.Bus.Infra;
using AcmeFileUpload_API.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace AcmeFileUpload_API_Test.ControllerTest
{
    public class FileControllerTest
    {
        private readonly Mock<IFileService> _fileService;
        public FileControllerTest()
        {
            _fileService = new Mock<IFileService>();
        }
        
        [Fact]
        public async void SaveFileAsync_Should_Return_200_OK_When_Proper_Body_Sent()
        {
            //Arrange
            _fileService.Setup(x => x.SaveFileAsync(It.IsAny<IFormFile>(),It.IsAny<CancellationToken>()))
                .ReturnsAsync(
                    new Tuple<string, long, bool, string>("sample_file.jpeg", 1203, true, "10-10-2020T06:00"));
            
            var controller = new FileController(_fileService.Object);
            
            //Act
            var result = await controller.UploadAsync(new FormCollection(null)) as OkObjectResult;
            
            //Arrange
            Assert.Equal(200,result.StatusCode);
        }
        
        [Fact]
        public async void SaveFileAsync_Should_Return_False_When_EmptyBody_Sent()
        {
            //Arrange
            _fileService.Setup(x => x.SaveFileAsync(It.IsAny<IFormFile>(),It.IsAny<CancellationToken>()))
                .ReturnsAsync(
                    new Tuple<string, long, bool, string>(string.Empty, 0, false, ""));
            
            var controller = new FileController(_fileService.Object);
            
            //Act
            var result = await controller.UploadAsync(new FormCollection(null)) as OkObjectResult;
            
            //Arrange
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.NotNull(okResult);
            Assert.Equal(200, okResult.StatusCode);
        }
    }
}