var inputtext = document.querySelector(".input-text");

var translateBtn = document.querySelector(".btn-translate");

var outputtext = document.querySelector(".output-text");

var url = "https://api.funtranslations.com/translate/morse.json";

function constructUrl(text) {
  return url + "?text=" + text;
}

translateBtn.addEventListener("click", () => {
  console.log("clicked");
  var text = inputtext.value;

  fetch(constructUrl(text))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      outputtext.innerText = translated;
    })
    .catch((err) => {
      alert(
        "Oops! Looks like the server isn't responding. Please check back a while later!"
      );
    });
});
