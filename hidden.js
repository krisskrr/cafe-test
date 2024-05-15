// Base64 encoded secret message
var encodedMessage = "VGhlIHNpdGUgd2FzIG1hZGUgYnkgdHdvIHBlb3BsZSBmcm9tIFJlemVrbmVzIFRlaG5pa3VtcywgMkFQIGNvdXJzZS4gRWxpYXNzIGFuZCBFbmlqYSA6RCAh";

// Function to decode Base64 message
function decodeMessage(encodedMessage) {
  return atob(encodedMessage);
}

// Function to create and insert the hidden message
function createHiddenMessage() {
  var helpMessage = document.createElement("div");
  helpMessage.id = "helpMessage";
  helpMessage.style.display = "none";
  helpMessage.style.position = "fixed";
  helpMessage.style.top = "50%";
  helpMessage.style.left = "50%";
  helpMessage.style.transform = "translate(-50%, -50%)";
  helpMessage.style.backgroundColor = "#fff";
  helpMessage.style.padding = "20px";
  helpMessage.style.borderRadius = "5px";
  helpMessage.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  helpMessage.style.zIndex = "9999";
  helpMessage.style.color = "#000";  // Set text color to black

  var hiddenMessageElement = document.createElement("p");
  hiddenMessageElement.innerText = decodeMessage(encodedMessage);
  helpMessage.appendChild(hiddenMessageElement);

  var twitchLink = document.createElement("a");
  twitchLink.href = "https://www.twitch.tv/s_shush";
  twitchLink.id = "twitchLink";
  twitchLink.target = "_blank";
  twitchLink.innerText = "https://www.twitch.tv/s_shush";
  helpMessage.appendChild(twitchLink);

  // Add a space between the links
  var space = document.createTextNode(" ");
  helpMessage.appendChild(space);

  var instagramLink = document.createElement("a");
  instagramLink.href = "https://www.instagram.com/actualdottore/";
  instagramLink.id = "instagramLink";
  instagramLink.target = "_blank";
  instagramLink.innerText = "https://www.instagram.com/actualdottore/";
  helpMessage.appendChild(instagramLink);

  var copyButton = document.createElement("button");
  copyButton.id = "copyButton";
  copyButton.innerText = "Copy";
  copyButton.style.marginTop = "10px";
  copyButton.style.padding = "5px 10px";
  copyButton.style.backgroundColor = "#007bff";
  copyButton.style.color = "#fff";
  copyButton.style.border = "none";
  copyButton.style.borderRadius = "3px";
  copyButton.style.cursor = "pointer";
  copyButton.addEventListener("click", copyToClipboard);
  helpMessage.appendChild(copyButton);

  document.body.appendChild(helpMessage);
}

// Function to copy the link to clipboard
function copyToClipboard() {
  var link = document.getElementById("twitchLink").innerText;
  navigator.clipboard.writeText(link)
    .then(function() {
      console.log("Link copied to clipboard!");
    })
    .catch(function(error) {
      console.error("Error copying link: ", error);
    });
}

// Event listener for the "h" key to show the help message
document.addEventListener("keypress", function(event) {
  var key = event.key;
  if (key === "h" || key === "H") {
    var helpMessage = document.getElementById("helpMessage");
    if (!helpMessage) {
      createHiddenMessage();
      helpMessage = document.getElementById("helpMessage");
    }
    helpMessage.style.display = "block";
  }
});
