let sout="<table border='1' width='600' cellpadding='3' cellspacing='0'>"
for(let i=1;i<=9;i++)
{
    sout=sout+"<tr>";
    for(let j=1;j<=9;j++)
        sout=sout+"<td>"+i+'x'+j+'='+i*j+"</td>";
    sout=sout+"</tr>";
}
sout=sout+"</table>";
document.write(sout);