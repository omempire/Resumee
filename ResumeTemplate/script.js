
// Header Values
const empName = document.getElementById("uName");
const empMail = document.getElementById("uMail");
const empCont = document.getElementById("uMob");

const nameEl = document.getElementById("nameField");
const mailEl = document.getElementById("emailField");
const contEl = document.getElementById("contactField");


// Education Values
const clgNameEl = document.getElementById("clgEdu");
const clgBranchEl = document.getElementById("clgBranchEdu");
const clgYearEl = document.getElementById("clgYearEdu");
const clgSemEl = document.getElementById("clgSemEdu");
const clgCGPAEl = document.getElementById("clgCGPAEdu");
const clgCityEl = document.getElementById("clgCityEdu");

const clgName = document.getElementById("clgSec");
const clgBranch = document.getElementById("clgBranchSec");
const clgYear = document.getElementById("clgYearSec");
const clgSem = document.getElementById("clgSemSec");
const clgCGPA = document.getElementById("clgCGPASec");
const clgCity = document.getElementById("clgCitySec");



// PERSONAL CHANGE
nameEl.addEventListener("input", () => {
    empName.textContent = nameEl.value;
});

function checkBold(El) {
    return El.indexOf(' ');
}

mailEl.addEventListener("input", () => {
    empMail.textContent = mailEl.value;
});

contEl.addEventListener("input", () => {
    empCont.textContent = " | +91 " + contEl.value;
});


// EDUCATION CHANGE
clgNameEl.addEventListener("input", () => {
    clgName.textContent = clgNameEl.value;
    clgName.style.textTransform = "Uppercase";
});

clgBranchEl.addEventListener("input", () => {
    clgBranch.textContent = "BTech | " + clgBranchEl.value;
    clgBranch.style.textTransform = "uppercase";
});

clgYearEl.addEventListener("input", () => {
    clgYear.textContent = clgYearEl.value;
    // clgName.style.textTransform = "Uppercase";
});

clgSemEl.addEventListener("input", () => {
    clgSem.textContent = clgSemEl.value;
    // clgName.style.textTransform = "Uppercase";
});

clgCGPAEl.addEventListener("input", () => {
    clgCGPA.textContent = "CGPA: " + clgCGPAEl.value + "/10" + ` (${clgSemEl.value} Sem.)`;
    // clgName.style.textTransform = "Uppercase";
});

clgCityEl.addEventListener("input", () => {
    clgCity.textContent = clgCityEl.value;
    // clgName.style.textTransform = "Uppercase";
});



// Skill ++

let i = 0;

function moreSkill() {
    if (i > 2) return;

    let skillEl1 = document.getElementById('programmingSec');

    let skillDiv1 = document.createElement("input");
    skillDiv1.classList.add("form-control");
    skillDiv1.classList.add("mt-2");
    skillDiv1.setAttribute("id", "programmingSkill" + (i));
    skillDiv1.placeholder = "Programming Languages";

    skillEl1.appendChild(skillDiv1);

    skillDiv1.addEventListener('input', () => {
        document.getElementById('prg' + (i)).textContent = skillDiv1.value;
    });

    i++;
}

let j = 0;

function moreWebTech() {
    if (j > 1) return;

    let skillEl2 = document.getElementById('webTechSec');

    let skillDiv2 = document.createElement("input");
    skillDiv2.classList.add("form-control");
    skillDiv2.classList.add("mt-2");
    skillDiv2.setAttribute("id", "webTechSkill" + (j + 1));
    skillDiv2.placeholder = "Web Technologies";

    skillEl2.appendChild(skillDiv2);

    skillDiv2.addEventListener('input', () => {
        document.getElementById('web' + (j)).textContent = skillDiv2.value;
    });

    j++;
}

let k = 0;

function moreTools() {
    if (k > 0) return;

    let skillEl3 = document.getElementById('toolSec');

    let skillDiv3 = document.createElement("input");
    skillDiv3.classList.add("form-control");
    skillDiv3.classList.add("mt-2");
    skillDiv3.setAttribute("id", "toolSkill" + (k + 1));
    skillDiv3.placeholder = "Software and Tools";

    skillEl3.appendChild(skillDiv3);

    skillDiv3.addEventListener('input', () => {
        document.getElementById('tool' + (k)).textContent = skillDiv3.value;
    });

    k++;
}

let m = 0;

function moreCourses() {
    if (m > 3) return;

    let skillEl4 = document.getElementById('courSec');

    let skillDiv4 = document.createElement("input");
    skillDiv4.classList.add("form-control");
    skillDiv4.classList.add("mt-2");
    skillDiv4.setAttribute("id", "takenCourses" + (m + 1));
    skillDiv4.placeholder = "Courses Completed";

    skillEl4.appendChild(skillDiv4);

    skillDiv4.addEventListener('input', () => {
        document.getElementById('course' + (m)).textContent = skillDiv4.value;
    });

    m++;
}

let r = 0;

function moreCmp() {
    if (r > 0) return;

    let skillEl5 = document.getElementById('descriptionExp');

    let skillDiv5 = document.createElement("input");
    skillDiv5.classList.add("form-control");
    skillDiv5.classList.add("mt-2");
    skillDiv5.setAttribute("id", "desExp" + (r + 1));
    skillDiv5.placeholder = "More Description";


    skillEl5.appendChild(skillDiv5);

    skillDiv5.addEventListener('input', () => {
        document.getElementById('expA1').textContent = skillDiv5.value;
    });

    r++;
}


let t = 0;

function moreCmp10() {
    if (t > 0) return;

    let skillEl6 = document.getElementById('descriptionExp10');

    let skillDiv6 = document.createElement("input");
    skillDiv6.classList.add("form-control");
    skillDiv6.classList.add("mt-2");
    skillDiv6.setAttribute("id", "desExp1" + (t + 1));
    skillDiv6.placeholder = "More Description";

    skillEl6.appendChild(skillDiv6);

    skillDiv6.addEventListener('input', () => {
        document.getElementById('expB1').textContent = skillDiv6.value;
    });

    t++;
}


let w = 0;

function moreProj() {
    if (w > 2) return;

    let skillEl7 = document.getElementById('projSec');

    let skillDiv7 = document.createElement("input");
    skillDiv7.classList.add("form-control");
    skillDiv7.classList.add("mt-2");
    skillDiv7.setAttribute("id", "programmingSkill" + (w + 1));
    skillDiv7.placeholder = "Describe Project...";

    skillEl7.appendChild(skillDiv7);

    skillDiv7.addEventListener('input', () => {
        document.getElementById('projA' + w).textContent = skillDiv7.value;
    });

    w++;
}


let q = 0;

function moreProj2() {
    if (q > 1) return;

    let skillEl8 = document.getElementById('projSec1');

    let skillDiv8 = document.createElement("input");
    skillDiv8.classList.add("form-control");
    skillDiv8.classList.add("mt-2");
    skillDiv8.setAttribute("id", "programmingSkill" + (q + 1));
    skillDiv8.placeholder = "Describe Project...";

    skillEl8.appendChild(skillDiv8);

    skillDiv8.addEventListener('input', () => {
        document.getElementById('projB' + q).textContent = skillDiv8.value;
    });

    q++;
}


let x = 0;

function moreAchieve() {
    if (x > 5) return;

    let skillEl9 = document.getElementById('achieveSec');

    let skillDiv9 = document.createElement("input");
    skillDiv9.classList.add("form-control");
    skillDiv9.classList.add("mt-2");
    skillDiv9.setAttribute("id", "programmingSkill" + (x + 1));
    skillDiv9.placeholder = "Achievements are...";

    skillEl9.appendChild(skillDiv9);

    skillDiv9.addEventListener('input', () => {
        document.getElementById('ach' + x).textContent = skillDiv9.value;
    });

    x++;
}


function submitResume() {
    let res = document.getElementById('resume-template');
    let resForm = document.getElementById('resume-form');
    let resHead = document.getElementById('header');

    resForm.style.display = "none";
    resHead.style.display = "none";

    let head1El = document.querySelectorAll('h1');
    let head4El = document.querySelectorAll('h4');
    let spanEl = document.querySelectorAll('span');
    let pEl = document.querySelectorAll('p');
    let ulEl = document.querySelectorAll('ul');
    let aEl = document.querySelectorAll('a');

    for (let i = 0; i < head1El.length; i++) {
        head1El[i].style.fontSize = "3rem";
    }

    for (let i = 0; i < head4El.length; i++) {
        head4El[i].style.fontSize = "1rem";
    }

    for (let i = 0; i < spanEl.length; i++) {
        spanEl[i].style.fontSize = "1rem";
    }

    for (let i = 0; i < pEl.length; i++) {
        pEl[i].style.fontSize = "1rem";
    }

    for (let i = 0; i < ulEl.length; i++) {
        ulEl[i].style.fontSize = "1rem";
    }

    for (let i = 0; i < aEl.length; i++) {
        aEl[i].style.fontSize = "1rem";
    }

    res.style.width = "100%";
    res.style.height = "auto";
    res.style.marginLeft = "0";
    res.style.marginTop = "0";
    res.style.marginBottom = "0";
    res.style.paddingLeft = "50px";
    res.style.paddingRight = "50px";
    res.classList.remove("border");

    document.getElementById('downloadBtn').style.display = "block";
}


function downloadResume()
{
    window.print();
    // document.getElementById('downloadBtn').style.display = "none";
}

// HTML TO PDF

// function dwnResume() {
//     var doc = new jsPDF();
//     var res = document.getElementById("resume-template");

//     doc.fromHTML(res, 15, 15);
//     doc.save("resume.pdf");

//     res.window.location.reload(true);
// }