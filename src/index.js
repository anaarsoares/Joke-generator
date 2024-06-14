function tellJoke(response) {
    console.log("Processing");
  
    let joke = document.querySelector("#show-joke");
    joke.innerHTML = response.data.answer;
  
    new Typewriter("#show-joke", {
      strings: response.data.answer,
      autoStart: true,
      delay: 12,
    });
  }
  
  let button = document.querySelector("#joke");
  button.addEventListener("click", function () {
    let apiKey = "279o37234fc0ba3effba9a107a3601tc";
    let context =
      "You have a great sense of humour, you are so good making jokes about animals";
    let prompt = "Please do a joke about a cat named Tofu and a dog named Stevie";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    axios.get(apiUrl).then(tellJoke);
  });
  