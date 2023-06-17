var names=["Hosh","John","Jen","jason","kapila","faizel","gowtham","sukumaran","anu","jim"];
for (var i in names){
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}