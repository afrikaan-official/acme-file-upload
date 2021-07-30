using System.Threading.Tasks;

namespace AcmeFileUpload.API.Bus.Infra
{
    public interface IFileService
    {
        Task SaveFileAsync(string filePath);
    }
}