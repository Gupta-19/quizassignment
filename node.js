var marks =0;
var timeflag=new Date();
var starttest=document.getElementsByClassName("welcomebutton");
var endtest=document.getElementsByClassName("submit");
var timemin;
var timesec;
var time =1200;
var k;
var start=document.getElementById("body");
var l;
var marks1=0;
var marks2 =0;
var marks3 =0;
var marks4 =0;
var marks5 =0;
function correctmarks1()
{
    marks1=0;
    marks1+=4;
}
function wrongmarks1()
{
    marks1=0;
    marks1-=1;
}
function correctmarks2()
{
    marks2=0;
    marks2+=4;
}
function wrongmarks2()
{
    marks2=0;
    marks2-=1;
}
function correctmarks3()
{
    marks3=0;
    marks3+=4;
}
function wrongmarks3()
{
    marks3=0;
    marks3-=1;
}
function correctmarks4()
{
    marks4=0;
    marks4+=4;
}
function wrongmarks4()
{
    marks4=0;
    marks4-=1;
}
function correctmarks5()
{
    marks5=0;
    marks5+=4;
}
function wrongmarks5()
{
    marks5=0;
    marks5-=1;
}
function showmarks()
{
    var resultalert;
    clearInterval(mytimer);
    marks=marks1+marks2+marks3+marks4+marks5;
    resultalert="you got "+marks +"/20"
    alert(resultalert);
}
function settimer()
{
    var timer=document.getElementsByClassName("time");   
        timesec=time%60;
        timemin=(time-timesec)/60;
        if(timesec<10)
            l="Time: "+timemin+":0"+timesec;
        else
            l="Time: "+timemin+":"+timesec;
        timer[0].innerHTML=l;
        time--;
    if(time<=0)
    {
        clearInterval(mytimer);
        var flag1= document.getElementsByClassName("backgroundpop");
        flag1[0].className="backgroundpoptime";
        var flag2 =document.getElementsByClassName("resultbutton");
        flag2[0].onclick = function(){showmarks();};
    }
}
var mytimer = setInterval(settimer,1000);