const button = document.querySelector(".pbtn");
const pass = document.querySelector(".text");

function passbtn() {
 button.addEventListener("click", (e) => {
  e.preventDefault();

  function random(length) {
   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   var randomString = "";
   for (var i = 0; i < length; i++) {
    var randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    randomString += randomCharacter;
   }
   return randomString;
  }
  var randomString = random(8);
  pass.innerHTML = randomString;
 });
}

passbtn();
function copy() {
 console.log(pass.value);
 pass.focus();
 pass.select();
 pass.setSelectionRange(0, 99999);
 document.execCommand("copy"); // Copy the selected text

 //  navigator.clipboard.writeText(pass.value);
 console.log(pass.value);
}
