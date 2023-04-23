const changeBackgroundColor = () =>{
    const body = document.querySelector("body");
    const colors = ["red","green","blue","cyan","yellow","black","red","purple","orange","black"];
    let currentIndex = 0;
    
    setInterval(()=>{
        body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 3000)
}


changeBackgroundColor();
