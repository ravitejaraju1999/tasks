var string=function(a)  //ANANYMOUS FUNCTION
{
    var caps=[];
    console.log(a);
    for(var i=0;i<a.length;i++)
    {
        caps.push(a[i].toUpperCase());
        
    }
    console.log(caps.join(" "));
    
};
string(["my","name","is","ravi","teja"]);



//OUTPUT= MY NAME IS RAVI TEJA