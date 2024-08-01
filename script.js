function add(){
    let ename=document.getElementById("ename").value;
    let amount=document.getElementById("amount").value;
    let items=document.getElementById("items").value;
    let date=document.getElementById("date").value;
    // console.log(ename);
    let table=document.getElementById("table");
    let a=document.createElement("tr");
    let b=document.createElement("td");
    b.innerHTML=ename;
    let c=document.createElement("td");
    c.innerHTML=amount;
    let d=document.createElement("td");
    d.innerHTML=items;
    let e=document.createElement("td");
    e.innerHTML=date;
    let btn=document.createElement("td");
    btn.innerHTML= '<button>EDIT</button>      <button onclick="del(event)">DELETE</button>'
    a.append(b);
    a.append(c);
    a.append(d);
    a.append(e)
    a.append(btn);
    table.append(a);
    
}
function del(event){
   event.target.parentNode.parentNode.remove();
}