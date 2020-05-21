let CurrentPerson;
let aud = new Audio();

let score = 0;
let miss = 0;
let Timer;

const maxtime = 10,
      maxscore = 30,
      maxerror = 3;

let time = maxtime;

let Countries = new Map([
  ["Austria","Vienna"],
  ["Belgium","Brussels"],
  ["Belarus","Minsk"],
  ["Bulgaria","Sofia"],
  ["Vatican","Vatican"],
  ["UK","London"],
  ["Hungary","Budapest"],
  ["Germany","Berlin"],
  ["Greece","Athens"],
  ["Denmark","Copenhagen"],
  ["Ireland","Dublin"],
  ["Spain","Madrid"],
  ["Italy","Rome"],
  ["Kosovo","Pristina"],
  ["Latvia","Riga"],
  ["Lithuania","Vilnius"],
  ["Liechtenstein","Vaduz"],
  ["Luxembourg","Luxembourg"],
  ["Malta","Valletta"],
  ["Moldova","Chisinau"],
  ["Monaco","Monaco"],
  ["Netherlands","Amsterdam"],
  ["Norway","Oslo"],
  ["Poland","Warsaw"],
  ["Portugal","Lisbon"],
  ["Russia","Moscow"],
  ["Romania","Bucharest"],
  ["San-Marino","San-Marino"],
  ["Serbia","Belgrade"],
  ["Slovakia","Bratislava"],
  ["Ukraine","Kiev"],
  ["Finland","Helsinki"],
  ["France","Paris"],
  ["Croatia","Zagreb"],
  ["Czech","Prague"],
  ["Switzerland","Bern"],
  ["Estonia","Tallinn"]
]);

let Names = [
  'Alex','Sirius','Tiso','Zot','Xero','Cloth',
  'Mike','Izma','Ho','Bretta','Sara','Lurien',
  'Teodor','Malec','Sheo','Myla','Jhon','Alice',
  'Hornet','Quirrel','Teo','Bardoon','Kate','Rose',
  'Grimm','Cornifer','Oro','Sly','Iselda','Elsa'
];

function Random(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function WrongName(name){
  if (name.indexOf('l') != -1)
    return name.replace('l','ll');
  if (name.indexOf('s') != -1)
    return name.replace('s','z');
  if (name.indexOf('iu') != -1)
    return name.replace('iu','eu');
  if (name.indexOf('rr') != -1)
    return name.replace('rr','r');
  if (name.indexOf('e') != -1)
    return name.replace('e','i');
  if (name.indexOf('j') != -1)
    return name.replace('j','y');
  if (name.indexOf('z') != -1)
    return name.replace('z','ce');
  if (name.indexOf('o') != -1)
    return name.replace('o','a');
  if (name.indexOf('a') != -1)
    return name.replace('a','o');
  if (name.indexOf('s' != -1))
    return name.replace('s','ce');
  if (name.indexOf('p' != -1))
    return name.replace('p','r');
  if (name.indexOf('w' != -1))
    return name.replace('w','v');
  if (name.indexOf('v' != -1))
    return name.replace('v','w');
}

function WrongCapital(){
  let key =Random(3);
  let country = Countries.keys();
  for (let i = 0; i < Random(Countries.size); i++){
    country.next();
  }
  country = country.next().value;
  switch(key){
    case 0: {
      return [WrongName(country), Countries.get(country)];
    }
    case 1: {
      return [country, WrongName(Countries.get(country))];
    }
    case 2:{
      wrongCity = Countries.values();
      for (let i = 0; i < Random(Countries.size); i++){
        wrongCity.next();
      }
      wrongCity = wrongCity.next().value;
      if (Countries.get(country) != wrongCity)
        return [Countries.get(country), wrongCity];
    }
  }
}

function RightCapital(){
  let country = Countries.keys();
  for (let i = 0; i < Random(Countries.size); i++){
    country.next();
  }
  country = country.next().value;
  return [country, Countries.get(country)];
}

function PersonName(){
  return [Names[Random(Names.length)], Names[Random(Names.length)]];
}

function RightLasting(){
  let key = Random(5);
  switch(key){
    case 0: return ["Diplomacy", Random(VisitDur("Diplomacy"))];
    case 1: return ["Work", Random(VisitDur("Work"))];
    case 2: return ["Tourism", Random(VisitDur("Tourism"))];
    case 3: return ["Visit", Random(VisitDur("Visit"))];
    case 4: return ["Shopping", Random(VisitDur("Shopping"))];
  }
}

function WrongLasting(){
  let key = Random(8);
  switch(key){
    case 0: return ["Diplomacy", VisitDur("Diplomacy") + 1 + Random(7)];
    case 1: return ["Work", VisitDur("Work") + 1 + Random(7)];
    case 2: return ["Tourism", VisitDur("Tourism") + 1 + Random(7)];
    case 3: return ["Visit", VisitDur("Visit") + 1 + Random(7)];
    case 4: return ["Shopping", VisitDur("Shopping") + 1 + Random(7)];
    default: return [-1, -1];
  }
}

function VisitDur(type){
  switch(type){
    case "Diplomacy": return 10;
    case "Work": return 15;
    case "Tourism": return 3;
    case "Visit": return 5;
    case "Shopping": return 1;
  }
  return -1;
}

function NewFace() {
  let face = document.getElementById('face');
  face.style.background = 'url("faces/'+ Random(5) + '.jpg") no-repeat';
}

function FillBlank() {

    Clear();
    CurrentPerson = new Person();
    console.log(CurrentPerson);

    let doc = document.getElementById('doc');

    let tmp = document.createElement('p');
    tmp.innerText = "Firstname: " + CurrentPerson.FirstName;
    tmp.id = "FirstName";
    doc.appendChild(tmp);

    tmp = document.createElement('p');
    tmp.innerText = "Lastname: " + CurrentPerson.LastName;
    tmp.id = "LastName";
    doc.appendChild(tmp);

    tmp = document.createElement('p');
    tmp.innerText = "Country: " + CurrentPerson.Country;
    tmp.id = "Country";
    doc.appendChild(tmp);

    tmp = document.createElement('p');
    tmp.innerText = "Capital: " +  CurrentPerson.Capital;
    tmp.id = "Capital";
    doc.appendChild(tmp);

    tmp = document.createElement('p');
    tmp.innerText = "Enter Date: " + CurrentPerson.EnterDate.getDate() + '.' + (CurrentPerson.EnterDate.getMonth() + 1);
    tmp.id = "EnterDate";
    doc.appendChild(tmp);

    tmp = document.createElement('p');
    tmp.innerText = "Exit Date: " + CurrentPerson.ExitDate.getDate() + '.' + (CurrentPerson.ExitDate.getMonth() + 1);
    tmp.id = "ExitDate";
    doc.appendChild(tmp);

    tmp = document.createElement('p');
    tmp.innerText = "Purpose: " + CurrentPerson.Purpose;
    tmp.id = "Purpose";
    doc.appendChild(tmp);
}

function Clear() {
if (CurrentPerson)
    {
        document.getElementById("FirstName").remove();
        document.getElementById("LastName").remove();
        document.getElementById("Country").remove();
        document.getElementById("Capital").remove();
        document.getElementById("EnterDate").remove();
        document.getElementById("ExitDate").remove();
        document.getElementById("Purpose").remove();
    }
}

function Check(el){

    if (el === 'pass' && CurrentPerson.IsCorrect)
        {
            return true
        }
    else if (el === 'decline' && !CurrentPerson.IsCorrect)
            {
                return true
            }
        else
            return false
}

function WinOrLose()
{
    if (miss < maxerror)
    {
        if (score === maxscore)
        {
            Win();
        }
    }
    else
    {
        Lose();
    }
}
function Lose()
{
    document.body.style.background = "#eb2f06";
    aud.src = "audio/lose.mp3";
    aud.play();
    aud.loop = false;
    clearTimeout(Timer);

}

function Win()
{
    document.body.style.background = "#05c46b";
    aud.src = "audio/win.mp3";
    aud.play();
    aud.loop = false;
    clearTimeout(Timer);

}

function MakePerson()
{
        NewFace();
        FillBlank();
}

function Gtimer(){
    if (time === maxtime) {
        MakePerson();
    }

    if (time >= 0) {
        document.getElementById('timer').innerHTML = "TIME: " + time;
    }

    if (time-- < 0)
    {
        clearTimeout(Timer);
        document.getElementById('miss').innerHTML = "MISS: " + (miss++);

    if (miss < maxerror)
        {
            time = maxtime;
            Gtimer();
        }
    }
    else
    {
        Timer = setTimeout(Gtimer, 1000);
    }
}

function ButtonPress(e)
{
    WinOrLose();
    let el = e.target.id;
    if (Check(el))
    {
        document.getElementById('score').innerText = "SCORE: " + (score++);
        clearTimeout(Timer);
        time = maxtime;
        Gtimer();
    }
    else
    {
        document.getElementById('miss').innerText = "MISS: " + (miss++);
        clearTimeout(Timer);
        time = maxtime;
        Gtimer();
    }
}


class Person{
  constructor(){
    let key = Random(3);
    this.IsCorrect = key == 2;
    if (this.IsCorrect){
      [this.FirstName, this.LastName] = PersonName();
      [this.Country, this.Capital] = RightCapital();
      let [purpose, differenceDate] = RightLasting();
      this.Purpose = purpose;
      this.EnterDate = new Date();
      this.ExitDate = new Date();
      this.ExitDate.setDate(this.ExitDate.getDate() + differenceDate);
    }
    else{
      key = Random(2);
      if (key == 0){
        [this.Country, this.Capital] = WrongCapital();
        let [purpose, differenceDate] = RightLasting();
        this.Purpose = purpose;
        this.EnterDate = new Date();
        this.ExitDate = new Date();
        this.ExitDate.setDate(this.ExitDate.getDate() + differenceDate);
      }
      else{
        [this.Country, this.Capital] = RightCapital();
        let [purpose, differenceDate] = WrongLasting();
        if (purpose != -1){
          this.Purpose = purpose;
          this.EnterDate = new Date();
          this.ExitDate = new Date();
          this.ExitDate.setDate(this.EnterDate.getDate() + differenceDate);
        }
        else{
          let [pps, dfcDate] = RightLasting();
          this.Purpose = pps;
          this.EnterDate = new Date();
          let dfc = Random(7);
          if (dfc == 4) dfc = 5;
          this.EnterDate.setDate(this.EnterDate.getDate() + dfc - 4);
          this.ExitDate = new Date();
          this.ExitDate.setDate(this.EnterDate.getDate() + dfc - 4);
        }
      }
      [this.FirstName, this.LastName] = PersonName();
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {

  let start = document.getElementById("start");
  let menu = document.getElementById("menu");
  let gamefiled = document.getElementById("gamefield");


  aud.loop = true;
  aud.src = "audio/menu.mp3";
  aud.play();

  start.addEventListener('click', function () {
    let pass = document.getElementById('pass');
    let decline = document.getElementById('decline');
    menu.style.display = "none";
    gamefiled.style.display = "block";
    aud.src = "audio/game.mp3";
    aud.play();

    Gtimer();

    pass.addEventListener("click", function (e) {
        ButtonPress(e);
    });

    decline.addEventListener("click", function (e) {
          ButtonPress(e);
      });

  });

});

