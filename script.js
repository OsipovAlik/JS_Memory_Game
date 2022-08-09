let array = [$(".place1"), $(".place2"), $(".place3"), $(".place4"), $(".place5"), $(".place6"), $(".place7"), $(".place8"), $(".place9"), $(".place10"), $(".place11"), $(".place12")];

let pic1 = "<img class='pictures' src='img/pic1.jpg' width='185px' height='148px' data-name >";
let pic2 = "<img class='pictures' src='img/pic2.jpg'  width='185px' height='148px'>";
let pic3 = "<img class='pictures' src='img/pic3.jpe'  width='185px' height='148px'>";
let pic4 = "<img class='pictures' src='img/pic4.jpg'  width='185px' height='148px'>";
let pic5 = "<img class='pictures' src='img/pic5.png'  width='185px' height='148px'>";
let pic6 = "<img class='pictures' src='img/pic6.jpg'  width='185px' height='148px'>";


var picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic1, pic2, pic3, pic4, pic5, pic6];
picArray = picArray.sort(() => 0.5 - Math.random() * 12);

function hideImage() {
    $(".pictures").hide()
}


$(".start").click(function () {
    picArray = picArray.sort(() => 0.5 - Math.random() * 12);

    for (let i = 0; i < array.length; i++) {
        array[i].html(picArray[i])
    }

    setTimeout(hideImage, 2000);


    // $(".start").off("click");

})

let newArr = [];
let count = 0;
newArr2 = []

    $('.place').click(function showImage() {
        debugger
        
        $(this).children('.pictures').show();
        
           newArr2.push($(this).children("img"))
           newArr.push($(this).children("img").attr("src"))
            
            if(newArr.length == 2 && newArr[0] !== newArr[1]){
                $(".place").off()
                setTimeout(() => {
                    $(".place").click(showImage)
                }, 2000);
                
                setTimeout((newArr2) => {
                    newArr2[0].hide()
                    newArr2[1].hide()
                }, 2000, newArr2);
                newArr = []
                newArr2 = []

            }else if(newArr.length == 2 && newArr[0] == newArr[1]){
                count++
                if (count === 6) {
                    setTimeout(() => {
                        alert("you win")
                    }, 100);
                }

                newArr = [];
                newArr2 = [];

            }else{
                console.log("4")
            }

        
        
    })
    



