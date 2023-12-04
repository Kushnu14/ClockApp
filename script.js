function updateClock()
{

    var date=new Date();
    var pe="AM";
    //for time
    var hrs=(date.getHours()<10?"0":"")+date.getHours();
    if(hrs==0)
    {
        hrs=12;
    }
    if(hrs>12)
    {
        hrs=hrs-12;
        if(hrs<10){
            hrs="0"+hrs.toString();
        }
        pe="PM";
    }
    
    var min=(date.getMinutes()<10?"0":"")+date.getMinutes();
    var sec=(date.getSeconds()<10?"0":"")+date.getSeconds();
    var time=hrs + ":" + min +":"+sec+" "+pe;
    var clock=document.getElementById("Clock");
    clock.innerHTML=time;

    //for date
    var dte=date.getDate();
    var mn=date.getMonth();
    var yr=date.getFullYear();
    
    var dt=document.getElementById("daynum");
    dt.innerHTML=dte;
    
    var mon=document.getElementById("month");
    mon.innerHTML=mn;

    var y=document.getElementById("year");
    y.innerHTML=yr;

    //day
    var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dy=document.getElementById("dayname");
    dy.innerHTML=week[date.getDay()];
  
}

    updateClock();
    setInterval(updateClock,1);

