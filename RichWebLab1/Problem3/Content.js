//array of images
let FootballImages = [
    "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTc5NTMwMzAxNjQ1NTMwMjQ5/gettyimages-891445.webp",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta0b651a34b44d5fc/60dbd8dc22d24e38a38b5f26/f32a20235b7c8a97cf370120f607bbb8a78f1dbe.jpg?quality=80&format=pjpg&auto=webp&width=1000",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg/170px-Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg",
    "https://footballnewss.com/wp-content/uploads/2022/06/asdc-1024x1024.jpg.webp",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Eusebio_%281963%29.jpg/220px-Eusebio_%281963%29.jpg"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * FootballImages.length)
    imgs[i].src = FootballImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Football is everywhere.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about football.";
}
