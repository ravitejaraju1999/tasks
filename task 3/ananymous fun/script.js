var num=function(a) //ananymous function
{
    var sum=0;
    
    for(var i=0;i<a.length;i++)
    {
       sum=sum+a[i]; 
    }
    console.log(sum);
    
};
num([1,2,3,4,5,6,7,8,9,10]);


//output=55