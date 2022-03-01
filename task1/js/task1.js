
var box = document.getElementsByClassName('box');
var open = document.getElementById('open');
var stop = document.querySelectorAll('button')[1];
var colors = [ '#f00','#ff0','#0ff','#00f','#f0f','#0f0','#888','#111','#222','#333','#444','#555','#666','#777','#999','#aaa','#bbb','#ccc','#ddd','#eee'];
var c
open.onclick = function(){
    clearInterval(c);
    c = setTimeout(start());
    c = setInterval(function(){
        start();
    },1000)
}
stop.onclick = function(){
    clearInterval(c);
    for(i = 0; i < box.length; i++ ){
        box[i].style.background = "#ffa600";
    }
}
var arr = [];
arr.length = 3;
function start() {
    for( var i = 0; i < box.length; i++){
        box[i].style.background = "#ffa600";
    }
    for (var i = 0; i < arr.length; i++) {
       var a = parseInt(Math.random() * 9);
        if(i == 0){
            arr[i] = a;
        }else{
            for(var j = 0; j < i ;j++){
                if(a == arr[j]){
                    i--
                }else{
                    arr[i] = a;
                }
            }
        }
    }
    var arr1 = [];
    arr1.length = 3;
    for(var i = 0; i< arr1.length; i++){
        var a = parseInt(Math.random() * 9);
        if ( i==0){
            arr1[i] = a;
        }else{
            for(var j = 0; j<i;j++){
                if(a == arr1[j]){
                    i--
                }else{
                    arr1[i] = a;
                }
            }
        }
    }
    for(var i = 0; i < arr.length;i++){
        box[arr[i]].style.background = colors[arr1[i]];
    }
}; 
