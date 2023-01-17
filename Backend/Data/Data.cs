using Backend.Models;
using System.Net.Cache;
using System.Text.Json;

namespace Backend.Data
{
    public interface IRepository
    {
        Task<List<Question>> GetQuestions();
    }

    public class Repository : IRepository
    {
        public async Task<List<Question>> GetQuestions()
        {
            using var openStream = File.OpenRead(@"./test.json");
            var tests = await JsonSerializer.DeserializeAsync<List<Question>>(openStream, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
            return tests ?? new List<Question>();
        }
    }
}
