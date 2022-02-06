let display = document.getElementById("display"); //Hämtar ID display i html

let buttons = Array.from(document.getElementsByClassName("button")); //Hämtar alla class "button". ovandla till array.

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = ""; //Sätter Att C "clearar" alla tidigare uträkningar.
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error"; // Om man matar in matimatiska fel: 1+*2, 2+-1...
        }
        break;
      default:
        display.innerText += e.target.innerText; //all tryckt text hamnar i display. (+=) används så flera kan läggas till.
    }

    //För extra koll
    /*   console.log("clicked"); 
    console.log(e); //Event
    console.log(e.target); //event target. känns att div klass tex 3 är den tryckta.
    console.log(e.target.innerText); //Returnar värdet inom traget. tex 3. */
  });
});
