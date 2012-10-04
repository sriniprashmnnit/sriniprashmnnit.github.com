function checkRadio (frmName, rbGroupName) { 
 var radios = document[frmName].elements[rbGroupName]; 
 for (var i=0; i <radios.length; i++) { 
  if (radios[i].checked) { 
   return true; 
  } 
 } 
 return false; 
} 

function validateDate() {
var day = document.forms["myForm"]["day"].value;
var month = document.forms["myForm"]["month"].value;
var year = document.forms["myForm"]["year"].value;
var myDateStr = day + ' ' + month + ' ' + year

var h = new Object(); 
h['January'] = 0;
h['February'] = 1;
h['March'] = 2;
h['April'] = 3;
h['May'] = 4;
h['June'] = 5;
h['July'] = 6;
h['August'] = 7;
h['September'] = 8;
h['October'] = 9;
h['November'] = 10;
h['December'] = 11;

var myMonthNumber = h[month]
var myDate = new Date();
myDate.setFullYear( parseInt(year), myMonthNumber, parseInt(day));
if ( myDate.getMonth() != myMonthNumber ) {
  alert( myDateStr + 'is NOT a valid date.' );
  return false
} else {
  return true
  
}
}

function validateForm()
{

if(!checkRadio("myForm", "type"))
{
	 alert("Select any one of the Backup Types"); 
	 return false;
}

var servername=document.forms["myForm"]["servername"].value;
var query=document.forms["myForm"]["query"].value;

if (servername==null || servername=="")
  {
  alert("Server Name must be Filled");
  return false;
  }
if (query==null || query=="")
  {
  alert("Query String is absent");
  return false;
  }

if(validateDate())
  return true
else
  return false

}



