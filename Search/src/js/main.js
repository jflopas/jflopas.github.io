// Function to keep selected buttons.
let btnContainer = document.getElementById("container");
let btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
// filterList() filters the list data based on what we type into the finder.
function filterList() {
  let input = document.getElementById("buscador");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("list");
  let li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    let span = li[i].getElementsByTagName("span")[0];
    let txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

let uniSpain = [
  "Universidad de Almería",
  "Universidad de Cádiz",
  "Universidad de Córdoba",
  "Universidad de Granada",
  "Universidad de Huelva",
  "Universidad Internacional de Andalucía",
  "Universidad de Jaén",
  "Universidad de Málaga",
  "Universidad de Pablo Olavide",
  "Universidad de Sevilla",
  "Universidad de Zaragoza",
  "Universidad San Jorge",
  "Universidad de La Laguna",
  "Universidad de Las Palmas de Gran Canaria",
  "Universidad de Cantabria",
  "Universidad Internacional Menéndez Pelayo UIMP",
  "Universidad de Castilla-La Mancha",
  "Universidad de Burgos",
  "Universidad Católica de Ávila",
  "Universidad Europea Miguel de Cervantes",
  "IE Universidad",
  "Universidad de León",
  "Universidad Pontificia de Salamanca",
  "Universidad de Salamanca",
  "Universidad de Valladolid",
  "Universitat Abat Oliba CEU",
  "Universidad Autónoma de Barcelona",
  "Universidad de Barcelona",
  "Universidad de Girona",
  "Universidad Internacional de Cataluña",
  "Universitat de Lleida",
  "Universitat Oberta de Catalunya",
  "Universidad Pompeu Fabra",
  "Universidad Ramón Llull",
  "Universidad Rovira i Virgili",
  "Universidad de Vic",
  "Universidad Alfonso X El Sabio",
  "Universidad de Alcalá",
  "Universidad Antonio de Nebrija",
  "Universidad Autónoma de Madrid",
  "Universidad Camilo José Cela",
  "Universidad Carlos III de Madrid",
  "Universidad Complutense de Madrid",
  "Universidad a Distancia de Madrid",
  "Universidad Europea de Madrid",
  "Universidad Francisco de Vitoria",
  "Universidad Nacional de Educación a Distancia U.N.E.D",
  "Universidad Politécnica de Madrid",
  "Universidad Pontificia Comillas",
  "Universidad Rey Juan Carlos",
  "Universidad San Pablo C.E.U.",
  "Universidad de Navarra",
  "Universidad Pública de Navarra",
  "Universidad de Alicante",
  "Universitat Jaume I de Castellón",
  "Universidad Miguel Hernández de Elche",
  "Universidad Politécnica de Valéncia",
  "Universitat de València",
  "Universidad Cardenal Herrera - CEU",
  "Universidad Católica de Valencia S. Vicente M.",
  "Universidad de Extremadura",
  "Universidad de A Coruña",
  "Universidad de Santiago de Compostela",
  "Universidade de Vigo",
  "Universitat de las Illes Balears",
  "Universidad de La Rioja",
  "Universidad Mondragon Unibertsitatea",
  "Universidad de Deusto",
  "Universidad del País Vasco",
  "Universidad de Oviedo",
  "Universidad Politécnica de Cartagena",
  "Universidad Católica San Antonio de Murcia",
  "Universidad de Murcia",
];

let uniPortugal = [
  "Universidade do Porto",
  "Universidade de Lisboa",
  "Universidade NOVA de Lisboa",
  "Universidade de Coimbra",
  "Universidade do Minho",
  "Universidade de Aveiro",
  "Universidade Catolica Portuguesa",
  "Instituto Universitário de Lisboa",
  "Universidade da Beira Interior",
  "Universidade do Algarve",
  "Universidade de Trás-os-Montes e Alto Douro",
  "Instituto Politécnico do Porto",
  "Universidade de Évora",
  "Instituto Politécnico de Lisboa",
  "Universidade dos Açores",
  "Universidade da Madeira",
  "Instituto Universitário de Ciências Psicológicas, Sociais e da Vida",
  "Instituto Politécnico de Bragança",
  "Cooperativa de Ensino Superior, Politecnico e Universitario",
  "Instituto Politécnico do Cávado e do Ave",
  "Instituto Politécnico de Viseu",
  "Universidade Fernando Pessoa",
  "Universidade Lusófona de Humanidades e Tecnologias",
  "Instituto Politécnico de Viana do Castelo",
  "Instituto Politécnico de Castelo Branco",
  "Universidade Portucalense Infante D. Henrique",
  "Instituto Politécnico de Coimbra",
  "Instituto Politécnico de Setúbal",
  "Instituto Superior de Ciências da Saúde Egas Moniz",
];

let uniUK = [
  "University of Oxford",
  "University of Cambridge",
  "UCL University College London",
  "Imperial College London",
  "University of Edinburgh",
  "University of Manchester",
  "King's College London",
  "University of Leeds",
  "University of Warwick",
  "University of Nottingham",
  "Bristol University",
  "University of Sheffield",
  "University of Glasgow",
  "Newcastle University Newcastle upon Tyne",
  "Queen Mary University of London",
  "University of Exeter",
  "University of Liverpool",
  "Cardiff University",
  "University of York",
  "London School of Economics and Political Science",
  "University of Sussex",
  "University of Leicester",
  "Lancaster University",
  "University of Surrey",
  "University of Saint Andrews",
  "Queen's University Belfast",
  "University of Southampton",
  "University of Bath",
  "University of East Anglia",
  "University of Aberdeen",
];

// This function add the elements contained in the arrays to the list.

function universitys(uni) {
  let list = uni
    .sort()
    .map(function (bar) {
      return "<li><span class='shadow-drop'>" + bar + "</span></li>";
    })
    .join("");
  document.getElementById("list").innerHTML = list;
}
