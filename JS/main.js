
console.log($("p"))

// scroll smooth
$("#link").click(function(e){
    let sec = $(e.target).attr("href")
    console.log(sec) //get attribute
    let sectop = $(sec).offset().top  //to get top of section
    $("body,html").animate({scrollTop:sectop},1000)
})


//for button open
let boxWidth = $(".links").outerWidth();
console.log(boxWidth)
$(".links").animate({left:`-${boxWidth}px`,width:`-${boxWidth}px`})
$(".setting").click(function(){
    if($(".links").css("left") === "0px"){
        $(".links").animate({left:`-${boxWidth}px`,width:`-${boxWidth}px`},300)
        $(".links").removeClass("p-5");
    }
    else{
        $(".links").animate({left:`0px`,width:`100%`},function(){
            $(".links").addClass("p-5");
        })

    }
})
$(".btnclose").click(function(){
    $(".links").animate({left:`-${boxWidth}px`,width:`0`},300)
    $(".links").removeClass("p-5");
})

//show or hide text in details
$("#paragraph2").hide(1)
$("#paragraph3").hide(1)
$("#paragraph4").hide(1)
$("#text1").click(function(){
    $("#paragraph1").toggle(1000)
    $("#paragraph2").hide(1000)
    $("#paragraph3").hide(1000)
    $("#paragraph4").hide(1000)
})
$("#text2").click(function(){
    $("#paragraph2").toggle(1000)
    $("#paragraph1").hide(1000)
    $("#paragraph3").hide(1000)
    $("#paragraph4").hide(1000)
})
$("#text3").click(function(){
    $("#paragraph3").toggle(1000)
    $("#paragraph2").hide(1000)
    $("#paragraph1").hide(1000)
    $("#paragraph4").hide(1000)
})
$("#text4").click(function(){
    $("#paragraph4").toggle(1000)
    $("#paragraph2").hide(1000)
    $("#paragraph3").hide(1000)
    $("#paragraph1").hide(1000)
})

//timer
document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    let targetDate = new Date("Jul 31, 2027 15:37:25").getTime();

    // Update the count down every 1 second
    let countdownFunction = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the target date
        let distance = now - targetDate;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#count1").html(`${days} D`)
        $("#count2").html(`${hours} h`)
        $("#count3").html(`${minutes} m`)
        $("#count4").html(`${seconds} s`)
    },1000)
})

//contact
//textarea count
let textarea = document.getElementById('textarea');
        let wordCountDisplay = document.getElementById('number');
        let maxWords = 100;

        textarea.addEventListener('input', () => {
            let words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
            let wordCount = words.length;
            let remainingWords = maxWords - wordCount;
            maxWords -= wordCount
            console.log(wordCount)

            wordCountDisplay.textContent = remainingWords >= 0 ? remainingWords : 0;

            // Disable input if word limit is reached
            if (remainingWords < 1) {
                wordCountDisplay.innerHTML = "your available character finished "
            }
        });


