function play()
{
    let limit=+prompt("Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu?");
    let num=Math.floor(Math.random() * limit)+1;
    let guess=+prompt("Nhập số bạn đoán");
    let count=1;
    while(count<=3)
    {
        if(num==guess)
        {
            alert("Chúc mừng bạn đã đoán đúng");
            break;
        }
        if(num>guess)
            guess=+prompt("Số bạn đoán lớn hơn");
        else
            guess=+prompt("Số bạn đoán bé hơn");
        count++;
    }
    if(count==4)
        alert("Bạn đã hết lần đoán");
}