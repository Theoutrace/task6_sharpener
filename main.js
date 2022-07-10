
//Q.1 and 2 Answer =============
var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.backgroundColor = 'green'  
var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
secondItem.style.display = 'none'  

//Q1// ================
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var secondItem2 = document.querySelectorAll('li:nth-child(2)')
for (var i = 0; i<secondItem2.length; i++){
    secondItem2[i].style.color = 'green'
}


//Q2//
//Choose all the odd elements and make their background green using QuerySelectorALL﻿
var oddd = document.querySelectorAll('li:nth-child(odd)')

for (var i = 0; i<oddd.length; i++){
    oddd[i].style.backgroundColor = 'green'
}


// Q3//
//What is the difference between queryselector and queryselectorall?
// queryselector can be used for single item even if we use it for a group. 
//queryselectorall can be used for a group to change things together
















