function tinh()
{
    let a=+document.getElementById("amount").value;
    let fc=document.getElementById('fc').value;
    let tc=document.getElementById('tc').value;
    let x;
    if(fc==="1")
    {
        if(tc==="2")
            x=a/23000+' $';
        else
            x=a+' Đ';
    }
    else
    {
        if(tc==="1")
            x=a*23000+' $';
        else
            x=a+' Đ';
    }
    //console.log(x);
    document.getElementById("result").innerHTML="result = "+ x;
}

