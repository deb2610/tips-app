window.onload = init;
"use strict";

//var defs
const cardCut = .96;
let empList = [];
let currentEmp;
//let emp1 = {name:'Olive', inTime:1300, outTime:2000};

//function defs
function constructEmp(nm,tin,tout){
 currentEmp = {name: nm, inTime:tin, outTime:tout}
 return currentEmp;
}
//main
function init(){
    empList.push(constructEmp('Nettie',630,1400));
    empList.push(constructEmp('Beth',830,1500));
    empList.push(constructEmp('Olive',1300,2000));
    
    empList.forEach(element => {
        console.log(element);

    });
}
