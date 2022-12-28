const year = +prompt("В якому році ви народились?", "");
let answerYear;
if (!year) {
  answerYear = "";
  alert("Шкода, що Ви не захотіли ввести рік народження.");
} else {
  answerYear = `Ваш вік ${2022 - year}.`;
}

const city = prompt("В якому місті ви проживаєте?", "");
let answerCity;
if (!city) {
  answerCity = "";
  alert("Шкода, що Ви не захотіли вказати місто.");
} else {
  if (city === "Київ") {
    answerCity = `Ви проживаєте у столиці України - ${city}.`;
  } else if (city === "Вашингтон") {
    answerCity = `Ви проживаєте у столиці CША - ${city}.`;
  } else if (city === "Лондон") {
    answerCity = `Ви проживаєте у столиці Великобританії - ${city}.`;
  } else {
    answerCity = `Ви проживаєте у місті ${city}.`;
  }
}

const sport = prompt("Який вид спорту тобі подобається більше: футбол, баскетбол чи хокей?", "");
let answerSport;
if (!sport) {
  answerSport = "";
  alert("Шкода, що Ви не захотіли обрати вид спорту.");
} else if (sport === "футбол") {
  answerSport = "Круто. Хочешь стати як Андрій Шевченко?";
} else if (sport === "баскетбол") {
  answerSport = "Круто. Хочешь стати як Олексій Лень?";
} else if (sport === "теніс") {
  answerSport = "Круто. Хочешь стати як Вейн Грецкі?";
} else {
  answerSport = `Ваш улюблений вид спорту ${sport}.`;
}

if (answerYear || answerCity || answerSport) {
  alert(`${answerYear} ${answerCity} ${answerSport}`);
} else {
  alert("Не вказано жодних данних");
}
