let total = []; //Spara totalen

$("#form").on("submit", (e) => {
  e.preventDefault(); //Återställer form till standard (tom)
});
//Uträkning, läggs i VARen array
const array = (nummer) => {
  let calculate = $("#input").val(); //var, hämtar input värde med .val
  if (calculate !== "") {
    $("#input").val("");
    $("#resultat").text("");

    if ($("#calc").text() === "") {
      $("#calc").text(calculate);
      total.push(calculate);
    } else {
      $("#calc").append(nummer + calculate);
      total.push(nummer, calculate);
    }
  }
};

$("#plus").on("click", () => {
  //Lägger till "+" vid tryck
  array("+");
});

$("#minus").on("click", () => {
  // -//- "-" vid tryck
  array("-");
});

const Totalen = () => {
  if (total.length >= 3) {
    $("#calc").text("");

    let summan = "";
    for (let i = 0; i < total.length; i++) {
      summan += total[i];
    }
    let sum = eval(summan);
    $("#resultat").text(sum);

    total = [];
  }
};
$("#summa").on("click", () => {
  Totalen();
});
