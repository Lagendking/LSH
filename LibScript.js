const KEYS = ["CKey_L09a0P", "CKey_SoAc55"]
let db = false

function checkPass(){
    var Key = document.getElementById("EnterKey");
    if(KEYS.includes(Key.value) && db == false) {
        alert("Correct Key!")
        db = true
        window.location.replace("LibraryInfo");
    }
}

setInterval(function(){
    checkPass()
}, 1000)
