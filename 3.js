function drawLine(str){

for (var i=0;i<str.length;i++){
        for (var j=1;j<=i;j++){
          var spasi = "&nbsp";
            document.write(spasi+spasi+spasi);
        }
        for (var k=1; k<2; k++){
            document.write(str[i]);
        }
        document.write("<br>");
    }
}


drawLine("DUMBWAYS");
document.write("<br>");
drawLine("DEV99")