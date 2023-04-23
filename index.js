const calculusII = document.getElementById("calculusII");
const biology = document.getElementById("biology");
const usHistory = document.getElementById("usHistory");
const statistics = document.getElementById("statistics");
const subjects = document.getElementById("subjects");
const questionBox = document.getElementById("questionbox");
const bush1 = document.getElementById("bush1");
const bush2 = document.getElementById("bush2");
const bush3 = document.getElementById("bush3");

function TransitionPage() {
    subjects.style.visibility="hidden";
    calculusII.style.visibility="hidden";
    biology.style.visibility="hidden";
    usHistory.style.visibility="hidden";
    statistics.style.visibility="hidden";
    bush1.style.visibility="visible";
    bush2.style.visibility="visible";
    bush3.style.visibility="visible";
    questionBox.style.visibility="visible";
}

calculusII.addEventListener("click", TransitionPage);
biology.addEventListener("click", TransitionPage);
usHistory.addEventListener("click", TransitionPage);
questionBox.addEventListener("click", TransitionPage);
