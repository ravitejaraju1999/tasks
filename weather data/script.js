
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

var lat;
var long;
request.onload=function()


{

  var data=JSON.parse(this.response);
 // console.log(data);

 lat=data[104].latlng[0];
 long=data[104].latlng[1];
 getweather(lat,long);
 
}

function getweather(lat,long)
{
var request=new XMLHttpRequest();
var s1="https://api.openweathermap.org/data/2.5/weather?lat=";

var s2="&lon=";

//console.log(lat,long);
var s3="&appid=b578688852a4ed7d2eef0b8556c86055";
var url=s1+lat+s2+long+s3;
request.open('GET',url,true)
request.send();
request.onload=function()
{
  var data2=JSON.parse(this.response);
  console.log(data2);
}
}

