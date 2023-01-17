using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text.Json;

namespace TestAPIProject
{
    public class ApiUnitTest
    {
        [Fact]
        public async void ApiReturnsAllTests()
        {
            // call the api
            var repo = new Repository();
            var ctrl = new Backend.Controllers.Test(repo);
            var response = await ctrl.Get();
            Assert.IsType<OkObjectResult>(response);
            var content = ((OkObjectResult)response).Value;
            Assert.IsType<List<Question>>(content);
            var questions = (List<Question>)content;
            Assert.Equal(14, questions.Count);
        }
    }
}