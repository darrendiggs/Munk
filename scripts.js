

document.querySelectorAll(".suppliesImg").addEventListener( "mouseover",function() {
    document.querySelectorAll(".suppliesImg").classList.remove("suppliesImg")
        document.querySelectorAll(".suppliesImg").classList.add("suppliesImgLg")
    });
    document.querySelectorAll(".suppliesImgLg").addEventListener( "mouseleave",function() {
        document.querySelectorAll(".suppliesImgLg").classList.remove("suppliesImgLg")
            document.querySelectorAll(".suppliesImgLg").classList.add("suppliesImg")
        });

        // this is to fix the mobile bug where if a product is click it gets stuck lg
        document.querySelectorAll(".suppliesImg").addEventListener( "click",function() {
            document.querySelectorAll(".suppliesImg").classList.remove("suppliesImglg")
                document.querySelectorAll(".suppliesImg").classList.add("suppliesImg")
            });

