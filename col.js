document.getElementById("failure").style.visibility = "hidden";
let Btn=document.getElementById("btn");

let gender=document.getElementById('gender');
let Age=document.getElementById('Age');
let Active=document.getElementById('Active');
let weight=document.getElementById('weight');
let ans = document.createElement('ans');


Btn.addEventListener('click', function (e) {

if(gender.value==='Child'&&Age.value==='2-3'&&Active.value==='Sedentaryb')
{
   
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1000 Calories a day');
 
}
if(gender.value==='Child'&&Age.value==='2-3'&&Active.value==="Moderately Activec")
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1000-1400 Calories a day');
}
if(gender.value==='Child'&&Age.value==='2-3'&&Active.value==="Actived")
{    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1000-1400 Calories a day');
    
}


//this is for female
if(gender.value==='Female'&&Age.value==='4-8'&&Active.value==='Sedentaryb')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1200 Calories a day');
    
}
if(gender.value==='Female'&&Age.value==='4-8'&&Active.value==='Moderately Activec')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
 
}
if(gender.value==='Female'&&Age.value==='4-8'&&Active.value==='Actived')
{
  
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');

}


//-------------------------------------------
if(gender.value==='Female'&&Age.value==='9-13'&&Active.value==='Sedentaryb')
{
   
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');

}
if(gender.value==='Female'&&Age.value==='9-13'&&Active.value==='Moderately Activec')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
    
}
if(gender.value==='Female'&&Age.value==='9-13'&&Active.value==='Actived')
{
   
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
  
}
//------------------------------------------------


if(gender.value==='Female'&&Age.value==='14-18'&&Active.value==='Sedentaryb')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');

}
if(gender.value==='Female'&&Age.value==='14-18'&&Active.value==='Moderately Activec')
{
  
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');

}
if(gender.value==='Female'&&Age.value==='14-18'&&Active.value==='Actived')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
 
}


//-------------------------------------------------------
if(gender.value==='Female'&&Age.value==='19-30'&&Active.value==='Sedentaryb')
{
   
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
   
}
if(gender.value==='Female'&&Age.value==='19-30'&&Active.value==='Moderately Activec')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
  
}
if(gender.value==='Female'&&Age.value==='19-30'&&Active.value==='Actived')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');

}

//-----------------------------------------------------

if(gender.value==='Female'&&Age.value==='31-50'&&Active.value==='Sedentaryb')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
    
}
if(gender.value==='Female'&&Age.value==='31-50'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
  
}
if(gender.value==='Female'&&Age.value==='31-50'&&Active.value==='Actived')
{
  
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
 
}


//-----------------------------------------------------------------------


if(gender.value==='Female'&&Age.value==='51+'&&Active.value==='Sedentaryb')
{
   
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
   
}
if(gender.value==='Female'&&Age.value==='51+'&&Active.value==='Moderately Activec')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
   
}
if(gender.value==='Female'&&Age.value==='51+'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');

}



//This is for Male




if(gender.value==='Male'&&Age.value==='4-8'&&Active.value==='Sedentaryb')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1200 Calories a day');

}
if(gender.value==='Male'&&Age.value==='4-8'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
   
}
if(gender.value==='Male'&&Age.value==='4-8'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
    
}


//-------------------------------------------
if(gender.value==='Male'&&Age.value==='9-13'&&Active.value==='Sedentaryb')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
  
}
if(gender.value==='Male'&&Age.value==='9-13'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
   
}
if(gender.value==='Male'&&Age.value==='9-13'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
   
}
//------------------------------------------------


if(gender.value==='Male'&&Age.value==='14-18'&&Active.value==='Sedentaryb')
{
    
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
    
}
if(gender.value==='Male'&&Age.value==='14-18'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');

}
if(gender.value==='Male'&&Age.value==='14-18'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
  
}


//-------------------------------------------------------
if(gender.value==='Male'&&Age.value==='19-30'&&Active.value==='Sedentaryb')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
}
 
if(gender.value==='Male'&&Age.value==='19-30'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
  
}
if(gender.value==='Male'&&Age.value==='19-30'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');

}

//-----------------------------------------------------

if(gender.value==='Male'&&Age.value==='31-50'&&Active.value==='Sedentaryb')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');
 
}
if(gender.value==='Male'&&Age.value==='31-50'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');

}
if(gender.value==='Male'&&Age.value==='31-50'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
    
}


//-----------------------------------------------------------------------


if(gender.value==='Male'&&Age.value==='51+'&&Active.value==='Sedentaryb')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1600 Calories a day');

}
if(gender.value==='Male'&&Age.value==='51+'&&Active.value==='Moderately Activec')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1600 Calories a day');
  
}
if(gender.value==='Male'&&Age.value==='51+'&&Active.value==='Actived')
{
    document.getElementById("result").firstChild.replaceData(0,40,'You need 1400-1800 Calories a day');
   
}

if(gender.value=='Child'&&Age.value=='4-8')
{
    document.getElementById("failure").style.visibility = "visible";
    setTimeout("location.reload(true);", 800);
    
  
}
if(gender.value=='Child'&&Age.value=='9-13')
{
    document.getElementById("failure").style.visibility = "visible";
    setTimeout("location.reload(true);", 800);
  
}
if(gender.value=='Child'&&Age.value=='14-18')
{
    document.getElementById("failure").style.visibility = "visible";
    setTimeout("location.reload(true);", 800);
  
}
if(gender.value=='Child'&&Age.value=='19-30')
{
    document.getElementById("failure").style.visibility = "visible";
     setTimeout("location.reload(true);", 800);
    
  
}
if(gender.value=='Child'&&Age.value=='31-50')
{
    document.getElementById("failure").style.visibility = "visible";
    setTimeout("location.reload(true);", 800);
  
}
if(gender.value=='Child'&&Age.value==='51+')
{
    document.getElementById("failure").style.visibility = "visible";
    setTimeout("location.reload(true);", 800);
  
}


});