function myFunction() {
    var x = document.getElementById("point").value;
    var y = 0;
    const array = [
        '0-','0','0+',
        '1-','1','1+',
        '2-','2','2+',
        '3-','3','3+',
        '4-','4','4+',
        '5-','5','5+',
        '6-','6','6+',
        '7-','7','7+',
        '8-','8','8+',
        '9-','9','9+',
        '10-','10','10+'
    ];
    if (array.includes(x)) {
        v = array.indexOf(x) + 1;
    } else {
        v = "NOT ALLOWED"
    }
    if (v == "NOT ALLOWED") {
        document.getElementById("all").innerHTML = (v + "! THIS IS KEVIN'S WORLD AND YOU CAN'T RUIN IT.");
    } else {
        document.getElementById("all").innerHTML = (v + " out of a possible 33 points.");
    }
    show = document.getElementById("panel2");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
}

function myFunctionGrade() {
    var x = document.getElementById("point").value;
    var grade = "";
    const array = [
        '0-','0','0+',
        '1-','1','1+',
        '2-','2','2+',
        '3-','3','3+',
        '4-','4','4+',
        '5-','5','5+',
        '6-','6','6+',
        '7-','7','7+',
        '8-','8','8+',
        '9-','9','9+',
        '10-','10','10+'
    ];
    const grades = [
        'F',
        'D-','D','D+',
        'C-','C','C+',
        'B-','B','B+',
        'A-','A','A+'
    ];
    if (array.includes(x)) {
        v = array.indexOf(x) + 1;
    } else {
        v = "not"
    }

    if (v != "not") {
        value = ((v / 33).toFixed(2)) * 100;
        if ( value < 59 ) { grade = value + '% (F)'; } else
        if ( value > 59 && value < 63 ) { grade = value + '% (D-)'; } else
        if ( value > 62 && value < 67 ) { grade = value + '% (D)';  } else
        if ( value > 66 && value < 70 ) { grade = value + '% (D+)'; } else
        if ( value > 69 && value < 73 ) { grade = value + '% (C-)'; } else
        if ( value > 72 && value < 77 ) { grade = value + '% (C)'; } else
        if ( value > 76 && value < 80 ) { grade = value + '% (C+)'; } else
        if ( value > 79 && value < 83 ) { grade = value + '% (B-)'; } else
        if ( value > 82 && value < 87 ) { grade = value + '% (B)'; } else
        if ( value > 86 && value < 90 ) { grade = value + '% (B+)'; } else
        if ( value > 89 && value < 93 ) { grade = value + '% (A-)'; } else
        if ( value > 92 && value < 98 ) { grade = value + '% (A)'; }
        else { grade = value + '% (A+)'; }
        v = grade;
        }
    document.getElementById("allGrade").innerHTML = v;

    // Shows and/or hides the element when clicked again
    show = document.getElementById("panel3");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
}

function explainMe() {
    var x = document.getElementById("kevinsMind");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
