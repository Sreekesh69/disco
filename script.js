function set(){
    setTimeout((()=> {
        document.body.style.background = "linear-gradient((rgba(0,0,0.5,.2), rgba(0,0,5.0,.2)),url('https://t4.ftcdn.net/jpg/05/54/67/29/360_F_554672900_SS6IaLKfcDsKdfUAVE4MyfLwqP6B2Wxi.jpg')";
        document.getElementById("h1").innerHTML= "ON THE FLOOR BABY";
    }),400);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.2), rgba(231, 80, 236, 0.4)),url('https://t4.ftcdn.net/jpg/05/54/67/29/360_F_554672900_SS6IaLKfcDsKdfUAVE4MyfLwqP6B2Wxi.jpg')";
        document.getElementById("h1").innerHTML= "HIT IT HARD BABY";

    }),800);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.2), rgba(255, 23, 23,.2)),url('https://t4.ftcdn.net/jpg/05/54/67/29/360_F_554672900_SS6IaLKfcDsKdfUAVE4MyfLwqP6B2Wxi.jpg')";
        document.getElementById("h1").innerHTML= "ROCK THE PARTY BABY";
    }),1200);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.2), rgb(0,0,0,.5)),url('https://t4.ftcdn.net/jpg/05/54/67/29/360_F_554672900_SS6IaLKfcDsKdfUAVE4MyfLwqP6B2Wxi.jpg')";
        document.getElementById("h1").innerHTML= "LET'S ROCK AND ROLL";
    }),1600);
}
setInterval(set,1600)