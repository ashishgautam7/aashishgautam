const navBar = document.getElementById('navbar');
let lastScrollPos = 0

window.addEventListener('scroll', function(){
    let currentScrollPos = window.scrollY;
    if (currentScrollPos>lastScrollPos) {
        navBar.classList.add('white')
    }else{
        navBar.classList.remove('white')
    }
})
const serviceDiv = document.querySelectorAll('.idobox')
serviceDiv.forEach(div=>{
    const heding = div.querySelector('.heading')

    div.addEventListener('mouseenter', function(){
        heding.classList.add("hidden")
       
        
    })
    div.addEventListener('mouseleave', function(){
        setTimeout(() => {
            heding.classList.remove("hidden")
        }, 356);
        
    })
})
function cvButton() {
    console.log("pressed");
    var filePath = "asset/Aashish Gautam Resume .docx";
    const a = document.createElement('a');
    a.href = filePath;
    a.download = "Aashish's Resume"
    a.click();
    alert('Resume downloaded')
}

