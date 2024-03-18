function Tinh()
{
    let old=+document.getElementById('old').value;
    let nww=+document.getElementById('new').value;
    let mon=nww-old;
    //document.getElementById('mon').innerHTML=' '+mon;
    let layer1=0,layer2=0,layer3=0,layer4=0,layer5=0,layer6=0;
    if(mon<=10)
    {
        layer1 = mon * 5973 ;
    }
    else
    {
        layer1=10*5973;
        if(mon<=20)
        {
            layer2=(mon-10)*7052;
        }
        else
        {
            layer2=10*7052;
            if(mon<=30)
            {
                layer3=(mon-20)*8669;
            }
            else
            {
                layer3=10*8669;
                layer4=(mon-30)*15929;
            }
        }
    }
    let sum=layer1+layer2+layer3+layer4+layer5+layer6;
    document.getElementById("muc1").innerHTML=layer1;
    document.getElementById("muc2").innerHTML=layer2;
    document.getElementById("muc3").innerHTML=layer3;
    document.getElementById("muc4").innerHTML=layer4;
    document.getElementById("sum").innerHTML="Tổng tiền: " +sum;
}