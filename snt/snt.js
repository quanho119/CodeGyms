let check=true;
let num=+prompt("Nhập n số nguyên tố đầu tiên");
let count=1;
let n=2;
while(count<=num)
{
    check=true;
    for(let i=2;i<=Math.sqrt(n);i++)
        if(n%i==0)
        {
            check=false;
            break;
        }
    if(check)
    {
        count++;
        document.writeln(n+'<br>');
    }
    n++;
}

