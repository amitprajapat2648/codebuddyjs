// level {1}

function pattern(){
    var row = parseInt(prompt())

        for(i=1;i<=row;i++){
            for(j=1;j<=row-i;j++){
                document.write(" ")
            }
            for(j=1;j<=i;j++){
                document.write(j)
            }
            for(j=i-1;j>=1;j--){
                document.write(j)
            }
            document.write("<br>")
        }
}
pattern()