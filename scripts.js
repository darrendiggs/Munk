
const productImgs = document.querySelectorAll(".expandable");

for (i = 0; i <= (productImgs.length -1); ++i) {
    productImgs[i].addEventListener( "mouseover", function() {
        this.classList.remove("suppliesImg")
        this.classList.add("suppliesImgLg")
        });
    };

for (i = 0; i <= (productImgs.length -1); ++i) {
    productImgs[i].addEventListener( "mouseleave", function() {
        this.classList.remove("suppliesImgLg")
        this.classList.add("suppliesImg")
        });
    };

    //this keeps the imgs from expanding when clicked in mobile view
for (i = 0; i <= (productImgs.length -1); ++i) {
    productImgs[i].addEventListener( "click", function() {
        this.classList.remove("suppliesImgLg")
        this.classList.add("suppliesImg")
        });
    };
    

    
    for(i = 0; i <= (document.querySelectorAll(".blkHeart").length -1); ++i){
document.querySelectorAll(".blkHeart")[i].addEventListener("click", function() {
    this.innerHTML = "❤️";
})}

