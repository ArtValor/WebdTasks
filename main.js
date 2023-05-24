const api_url="https://www.coursehubiitg.in/api/codingweek/contributions";
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();
    data.sort((a,b)=>{
        return b.points - a.points;
    });
    var temp=data[1];
    data[1]=data[0];
    data[0]=temp;
    console.log(data);
    for(var i=4;i<=data.length;i++){
        var newElement=document.createElement('div');
        newElement.className="subrect";
        var newElement1=document.createElement('div')
        newElement1.className="left";
        var newElement2=document.createElement('div')
        newElement2.className="number";
        newElement1.appendChild(newElement2);
        newElement2.innerHTML=i.toString();
        var newElement3=document.createElement('div')
        newElement3.className="avatar";
        newElement3.id="Avatar"+i.toString();
        newElement1.appendChild(newElement3);
        var newElement4=document.createElement('div')
        newElement4.className="name";
        newElement4.id="Name"+i.toString();
        newElement1.appendChild(newElement4);
        newElement.appendChild(newElement1);
        var newElement5=document.createElement('div')
        newElement5.className="score";
        newElement5.id="Score"+i.toString();
        newElement.appendChild(newElement5);
        document.getElementById('rectangle3').appendChild(newElement);
    }
    let scores=document.querySelectorAll('[id^=Score]');
    let names=document.querySelectorAll('[id^=Name]');
    for(var i in scores){
        scores[i].innerHTML=data[i].points.toString();
        names[i].innerHTML=data[i].name;
        var a="url("+data[i].avatar+")";
        var c=Number(i)+1;
        var b="Avatar"+c.toString();
        document.getElementById(b).style.backgroundImage=a;
    }
}
getapi(api_url);


