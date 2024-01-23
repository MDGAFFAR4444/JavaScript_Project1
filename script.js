// var head1 = document.querySelector("h1");

// head1.innerHTML = "hi meri jaan"
// head1.addEventListener("click", function(){
//     head1.style.color = "green"
//     head1.style.backgroundColor = "yellow"
// })

var btn = document.querySelector("button")
var h5 = document.querySelector("h5")

var flag = 0

btn.addEventListener("click", function() {

    if(flag == 0) {
        h5.innerHTML = "Friend Accepted"
        h5.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    }else {
        h5.innerHTML = "Strangers"
        h5.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }

})
