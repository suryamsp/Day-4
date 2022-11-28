// compare two json

var obj1 = {
    name:"Person 1",
    age:5
}
var obj2 = {
    age:5,
    name:"Person 1",
    
}

var equal= function(){
    k1=Object.keys(obj1);
    k2=Object.keys(obj2);
    return k1.length===k2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
    
}
console.log("JSON Object Equal is:  "+equal(obj1,obj2));



// print all country flags
var store= new XMLHttpRequest();
store.open("GET","https://restcountries.com/v3.1/all",true);
store.send();
store.onload=function(){
    var fruite =store.response;
    var output = JSON.parse(fruite);
    for(var result of output){
        console.log("Country name : "+result.name.common,'\n'+"Flags link : "+result.flags.png);
    }
}

// print all country name.region,subregion and population
var store= new XMLHttpRequest();
store.open("GET","https://restcountries.com/v3.1/all",true);
store.send();
store.onload=function(){
    var fruit =store.response;
    var outpu = JSON.parse(fruit);
    for(var result of outpu){
        console.log("Country name : "+result.name.common,'\n'+"Region : "+result.region,'\n'+"subRegion : "+result.subregion,'\n'+"Populatio : "+result.population);
    }
}






