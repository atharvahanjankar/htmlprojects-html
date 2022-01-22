var mks = parseInt(document.getElementById('mksobt').valueAsNumber);
var mks1 =parseInt(document.getElementById('mksobt1').valueAsNumber);
var mks2 =parseInt(document.getElementById('mksobt2').valueAsNumber);
var mks3 =parseInt(document.getElementById('mksobt3').valueAsNumber);
var mks4 =parseInt(document.getElementById('mksobt4').valueAsNumber);


switch(true){
    case(mks >=35 && mks <=50  ):
    document.getElementById('grade').value="C";
    break;
    case(mks >=50 && mks <=75  ):
    document.getElementById('grade').value="B";
    break;
    case(mks >=75 && mks <=100  ):
    document.getElementById('grade').value="A";
    break;
}
switch(true){
    case(mks1 >=35 && mks1 <=50  ):
    document.getElementById('grade1').value="C";
    break;
    case(mks1 >=50 && mks1 <=75  ):
    document.getElementById('grade1').value="B";
    break;
    case(mks1 >=75 && mks1 <=100  ):
    document.getElementById('grade1').value="A";
    break;
}
switch(true){
    case(mks2 >=35 && mks2 <=50  ):
    document.getElementById('grade2').value="C";
    break;
    case(mks2 >=50 && mks2 <=75  ):
    document.getElementById('grade2').value="B";
    break;
    case(mks2 >=75 && mks2 <=100  ):
    document.getElementById('grade2').value="A";
    break;
}
switch(true){
    case(mks3 >=35 && mks3 <=50  ):
    document.getElementById('grade3').value="C";
    break;
    case(mks3 >=50 && mks3 <=75  ):
    document.getElementById('grade3').value="B";
    break;
    case(mks3 >=75 && mks3 <=100  ):
    document.getElementById('grade3').value="A";
    break;
}
switch(true){
    case(mks4 >=35 && mks4 <=50  ):
    document.getElementById('grade4').value="C";
    break;
    case(mks4 >=50 && mks4 <=75  ):
    document.getElementById('grade4').value="B";
    break;
    case(mks4 >=75 && mks4 <=100  ):
    document.getElementById('grade4').value="A";
    break;
}

var total = mks + mks1 + mks2 + mks3 + mks4;
document.getElementById('totalMks').value=total;



var percentage = ( total / 500 ) * 100 ;
// console.log(percentage);
document.getElementById('per').value= percentage.toFixed(2);