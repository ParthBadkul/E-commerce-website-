var a= prompt("first number: ");
        var b= prompt("Second number: ");
        var c= prompt("Third number: ");
        if(a>b && a>c){
            document.write( a + " is the largest number");
        }
        else if(b>c && b>a){
            document.write( b + " is the largest number");
        }
        else{
            document.write( c + " is the largest number");
        }