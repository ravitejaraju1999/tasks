var odd=function(a) //ananymous function
{
   var o=[];
   
   for(var i=0;i<a.length;i++)
   {
      if(a[i]%2 !==0)
      {
       o.push(a[i]);   
      }
    
   }
   console.log(o.join(" "));
  
    
};

odd([1,2,3,4,5,6]);



//output=1 3 5