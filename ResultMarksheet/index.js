
// }
function iframee(){

    
    var x = document.getElementById('inpRollNo').valueAsNumber;
    // if(x == 1){
    //     document.getElementById('mainpage').innerHTML += "<iframe src='marksheetRollNoOne.html' id='iframe'></iframe>";
    // }
    // else if(x == 2){
    //     document.getElementById('mainpage').innerHTML += "<iframe src='marksheetRollNoTwo.html' id='iframe'></iframe>";
    // }

    if(x == 1){
        document.getElementById('display').innerHTML = "<br><iframe src='marksheetRollNoOne.html' id='iframe'></iframe>";
    }
    else if(x == 2){
        document.getElementById('display').innerHTML = "<br><iframe src='marksheetRollNoTwo.html' id='iframe'></iframe>";
    }
}




// code used but not working
// var x = document.getElementById('inpRollNo').valueAsNumber;

    // if(x == 1){
    //     var z = document.getElementById("changeValue");
    //     var y = z.contentDocument;
    //     y.body.style.backgroundColor = "red";
    // }
    // else if(x == 2){
    //     var z = document.getElementById("changeValue");
    //     var y = z.contentDocument;
    //     y.body.style.backgroundColor = "blue";
    // }



//========================================================================================
    //var R = document.getElementById('f1').value;
// var mk1 = document.getElementById('markRN1');
// var mk1s = "../ResultMarksheet/marksheerRollNoOne.html";

// function iframee(){
//     var p=document.getElementById('f1').value;
//     // document.getElementById('f1').value=ans;
//     document.getElementById('ans').value=p;
// }

// else if(Rs == '2'){
//         var n = document.getElementById("changeValue");
//         var m = n.contentDocument;
//     m.body.style.backgroundColor = "blue";
//     }