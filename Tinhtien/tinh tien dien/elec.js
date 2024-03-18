function Tinh()
{
    let old=+document.getElementById('old').value;
    let nww=+document.getElementById('new').value;
    let mon=nww-old;
    //document.getElementById('mon').innerHTML=' '+mon;
    let stage1=0,stage2=0,stage3=0,stage4=0,stage5=0,stage6=0;
    if(mon<=50)
    {
        stage1 = mon * 1678;
    }
    else
    {
        stage1=83900;
        if(mon<=100)
        {
            stage2=(mon-50)*1734;
        }
        else
        {
            stage2=86700;
            if(mon<=200)
            {
                stage3=(mon-100)*2014;
            }
            else
            {
                stage3=201400;
                if(mon<=300)
                {
                    let stage4=(mon-200)*2536;
                    sum+=stage4;
                }
                else
                {
                    stage4=253600;
                    if(mon<=400)
                    {
                        stage5=(mon-300)*2834;
                    }
                    else
                    {
                        stage5=283400;
                        stage6=(mon-400)*2927;
                    }
                }
            }
        }
    }
    let sum=stage1+stage2+stage3+stage4+stage5+stage6;
    document.getElementById("bac1").innerHTML=stage1;
    document.getElementById("bac2").innerHTML=stage2;
    document.getElementById("bac3").innerHTML=stage3;
    document.getElementById("bac4").innerHTML=stage4;
    document.getElementById("bac5").innerHTML=stage5;
    document.getElementById("bac6").innerHTML=stage6;
    document.getElementById("sum").innerHTML="Tổng tiền: " +sum;
}