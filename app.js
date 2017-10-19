var dataKey = document.querySelectorAll('.key');
var keyC = document.querySelectorAll('.key')


var dataArr = [];
for(var i =0; i < dataKey.length; i++){
    var val = dataKey[i].getAttribute('data-keys');
    dataArr.push(val);
}

var found = false;

window.addEventListener("keydown",function(e){
    var thatIndex =findKey(e);
    if(found){
        keyC[Number(thatIndex)].classList.toggle("playing");  
    }else{
    console.log("uh oh.. UNKNOWN ERROR!");
  }
    found = false;
});

for(var i =0; i < keyC.length; i++){
    keyC[i].addEventListener("click",function(){
        this.classList.toggle("playing");
    })
}



function findKey(e){
    var foundIndex = 0;
    for(var i = 0; i< dataArr.length; i++){
        if(Number(dataArr[i]) === e.keyCode){
            found = true;
            foundIndex = i;
        }
    }
    
    return foundIndex;
}

var person = {
    firstname: ' default',
    lastname: 'default',
    fullname: function(){
        console.log(this.lastname + " " + this.firstname)
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

john.__proto__ = person;

for (var prop in john){
    console.log(prop + ': ' + john[prop]);
}