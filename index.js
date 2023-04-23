const calculusII = document.getElementById("calculusII");
const biology = document.getElementById("biology");
const usHistory = document.getElementById("usHistory");
const statistics = document.getElementById("statistics");
const subjects = document.getElementById("subjects");
const questionBox = document.getElementById("questionbox");

const level2 = document.getElementById("nextLevel");
const correct = document.getElementById("correct");
const level3 = document.getElementById("lastLevel");

const bush1 = document.getElementById("bush1");
const bush2 = document.getElementById("bush2");
const bush3 = document.getElementById("bush3");
const bush4 = document.getElementById("bush4");
const bush5 = document.getElementById("bush5");
const bush6 = document.getElementById("bush6");
const bush7 = document.getElementById("bush7");
const bush8 = document.getElementById("bush8");
const tbush1 = document.getElementById("tbush1");
const tbush2 = document.getElementById("tbush2");
const tbush3 = document.getElementById("tbush3");
const capybara1 = document.getElementById("capybara1");
const capybara2 = document.getElementById("capybara2");
const capybara3 = document.getElementById("capybara3");
const capybara4 = document.getElementById("capybara4");
const capybara5 = document.getElementById("capybara5");
const capybara6 = document.getElementById("capybara6");
const capybara7 = document.getElementById("capybara7");
const capybara8 = document.getElementById("capybara8");
const capybara9 = document.getElementById("capybara9");
const capybara10 = document.getElementById("capybara10");

const pine1 = document.getElementById("pine1");
const pine2 = document.getElementById("pine2");
const pine3 = document.getElementById("pine3");
const layered1 = document.getElementById("layered1");
const layered2 = document.getElementById("layered2");
const layered3 = document.getElementById("layered3");

const jungle = document.getElementById("jungle");
const jungle2 = document.getElementById("jungle2");

function TransitionPage() {
    subjects.style.display="none";
    bush1.style.visibility="visible";
    bush2.style.visibility="visible";
    bush3.style.visibility="visible";
    bush4.style.visibility="visible";
    bush5.style.visibility="visible";
    bush6.style.visibility="visible";
    bush7.style.visibility="visible";
    bush8.style.visibility="visible";
    tbush1.style.visibility="visible";
    tbush2.style.visibility="visible";
    tbush3.style.visibility="visible";
    questionBox.style.display="inline";
}

var x = 0;
const capybaras = [capybara1, capybara2, capybara3, capybara4, capybara5, capybara6, capybara7, capybara8, capybara9, capybara10];
function AddCapybara() {
    capybaras[x].style.visibility="visible";
    x++;
}

function LevelTwo() {
    // Hiding all bushes from previous level
    bush1.style.display="none";
    bush2.style.display="none";
    bush3.style.display="none";
    bush4.style.display="none";
    bush5.style.display="none";
    bush6.style.display="none";
    bush7.style.display="none";
    bush8.style.display="none";
    tbush1.style.display="none";
    tbush2.style.display="none";
    tbush3.style.display="none";
    // Hiding all capybaras from previous level
    for(i=0;i<capybaras.length;i++){
        capybaras[i].style.display="none";
    }

    //Making visible all pine trees for next level
    pine1.style.visibility="visible";
    pine2.style.visibility="visible";
    pine3.style.visibility="visible";
    layered1.style.visibility="visible";
    layered2.style.visibility="visible";
    layered3.style.visibility="visible";
}

function LevelThree() {
    //Hiding all trees from previous level
    pine1.style.display="none";
    pine2.style.display="none";
    pine3.style.display="none";
    layered1.style.display="none";
    layered2.style.display="none";
    layered3.style.display="none";

    //Making visible all trees for next level
    jungle.style.visibility="visible";
    jungle2.style.visibility="visible";
}

calculusII.addEventListener("click", TransitionPage);
biology.addEventListener("click", TransitionPage);
usHistory.addEventListener("click", TransitionPage);
questionBox.addEventListener("click", TransitionPage);
level2.addEventListener("click", LevelTwo);
level3.addEventListener("click", LevelThree);
correct.addEventListener("click", AddCapybara);