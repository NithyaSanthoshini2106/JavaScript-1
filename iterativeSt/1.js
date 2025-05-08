let n = 5;
for (i = 1; i <= n; i++){
    var temp = "";
    for (j = 1; j <= n; j++){
        temp=temp+" "+j;
    }
    if(i===1){
    console.log(temp);
    }
}