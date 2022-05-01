setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    // 12hr=360 deg 
    // 1hr?
    // hence 360/12=30deg;
    // so for hour hand 30h+m/2;

    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;


},1000);
