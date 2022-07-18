const KEYS = ["CKey_L09a0P", "CKey_SoAc55"]

function checkPass(){
    var Key = document.getElementById("EnterKey");
    if(KEYS.includes(Key.value)) {
        alert("Correct Key!")
        window.location.replace("LibraryInfo");
    }
}

setInterval(function(){
    checkPass()
}, 1000)
