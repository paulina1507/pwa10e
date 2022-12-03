var lienzo = document.getElementById("lienzo"); 
var cd = lienzo.getContext("2d");

var lienzo2 = document.getElementById("lienzo2"); 
var cd2 = lienzo2.getContext("2d");

var lienzo3 = document.getElementById("lienzo3"); 
var cd3 = lienzo3.getContext("2d");

var lienzo4 = document.getElementById("lienzo4"); 
var cd4 = lienzo4.getContext("2d");

var lienzo5 = document.getElementById("lienzo5"); 
var cd5 = lienzo5.getContext("2d");

var lienzo6 = document.getElementById("lienzo6"); 
var cd6 = lienzo6.getContext("2d");

var x = 1070;
var y = 550;
var Ex = 1060;
var Ey = 540;

function exhibirLineas(){
    var x = 20;
    var y = 20;
    while(x <= Ex || y <= Ey){
        cd.strokeStyle = 'Cyan';
        cd.moveTo(x, 0);
        cd.lineTo(x, Ey);
        cd.moveTo(0, y);
        cd.lineTo(Ex, y);
        cd.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    //plano Cartesiano
    //eje y
    var pex = Ex / 2;
    cd2.lineWidth = 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(pex, 0);
    cd2.lineTo(pex, pex+10);
    cd2.stroke();
    //eje x
    var pey = Ey / 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(0, pey-10);
    cd2.lineTo(Ex, pey-10);
    cd2.stroke();
    x = 20;
    y = 20;
    while(x <= Ex || y <= Ey){
        cd2.moveTo(x, pey-10);
        cd2.lineTo(x, pey);
        cd2.moveTo(pex+10,y);
        cd2.lineTo(pex, y);
        cd2.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    Numero_PlanoY();
}
function Numero_PlanoY(){
    var pex = Ex / 2;
    var pey = Ey / 2;
    x = 20;
    y = 20;
    var Number = 1;
    while(y <= Ey){
        cd2.fillText("-"+Number, pex+14, pey+2+y, 200); //y+
        cd2.fillText(Number, pex+14, pey-17-y, 200); //y-
        Number = Number+1;
        y = y + 30;      
    }
    Number = 1;
    while(x <= Ex+150){
        cd2.fillText(Number, pex+6+x, pey+10, 200); //x+
        cd2.fillText("-"+Number, pex-16-x, pey+10, 200); //x-
        Number = Number+1;
        x = x + 30;   
    }
    cd2.fillText("0", pex+5, pey-15, 200); //0
    cd2.fillText("0", pex-15, pey+5, 200); //0
}
function GetData(){
    var A, B, C, D, E, F, X1, X2, X3, X4;
    var nuevoArray = new Array();
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;
    D = document.getElementById('D').value;
    E = document.getElementById('E').value;
    F = document.getElementById('F').value;
    X1 = document.getElementById('X1').value;
    X2 = document.getElementById('X2').value;
    X3 = document.getElementById('X3').value;
    X4 = document.getElementById('X4').value;
    Hallar(A, B, C, D, E, F, X1, X2, X3, X4, nuevoArray)
}
function Linea1(x3, x4, arr){
    cd5.strokeStyle = 'Green';
    cd5.lineWidth = 2;
    px1 = x/2 + (30 * x3 )-80
    py1 = y/2 - (30 * (arr[4]) )-20
    px2 = x/2 + (30 * x4 )-80
    py2 = y/2 - (30 * (arr[5]) )-20
    cd5.moveTo(px2, py2);
    cd5.lineTo(px1, py1);
    cd5.stroke();
}
function Linea2(x1, x2, arr){
    cd4.strokeStyle = 'Blue';
    cd4.lineWidth = 2;
    px1 = x/2 + (30 * x1 )-80
    py1 = y/2 - (30 * arr[2])-20
    px2 = x/2 + (30 * x2 )-80
    py2 = y/2 - (30 * arr[3] )-20
    cd4 .moveTo(px2, py2);
    cd4.lineTo(px1, py1);
    cd4.stroke();
}
function Punto(arr){
    debugger
    p1 = x/2 + (30 * arr[1])-80
    p2 = y/2 - (30 * arr[0])-20
    var r = 10;
    cd3.strokeStyle = "#006400";
    cd3.fillStyle = "Red";
    cd3.lineWidth = 5;
    cd3.arc(p1, p2, r,0,2*Math.PI);
    cd3.fill();
}
function Limpiar(){
    cd3.clearRect(0, 0, x, y);
    cd4.clearRect(0, 0, x, y);
    cd5.clearRect(0, 0, x, y);
    cd6.clearRect(0, 0, x, y);
}
function Hallar(a, b, c, d, e, f, x1, x2, x3, x4, arr){

        arr[0] = (a*f-d*c) / (a*e-d*b); //valor de Y
        arr[1] = (c - b*arr[0]) / a; //valor de X
        arr[2] = (c - a*x1) / b; //valor de y1
        arr[3] = (c - a*x2) / b; //valor de y2
        arr[4] = (f - d*x3) / e; //valor de y3
        arr[5] = (f - d*x4) / e; //valor de y4

        Linea1(x3, x4, arr);
        Linea2(x1, x2, arr);
        Punto(arr);
        
        document.getElementById('REC1').innerHTML = a+"x + "+b+"y = "+c;
        document.getElementById('REC2').innerHTML = d+"x + "+e+"y = "+f;
        console.log("P3(x3, y3) = " + "(" + x3 + "," + arr[4] + ")");
        console.log("P4(x4, y4) = " + "(" + x4 + "," + arr[5] + ")");
        document.getElementById('RX').innerHTML = "X: "+arr[1];
        document.getElementById('RY').innerHTML = "Y: "+arr[0];

        if((a*f-d*c) == 0 && (a*e-d*b) == 0)
                document.getElementById('contenido').innerHTML = "Tiende a ser infinito";
        else if((a*e-d*b) == 0)
                document.getElementById('contenido').innerHTML = "No hay solucion";
        else if((arr[0]) != 0)
        {
                document.getElementById('contenido').innerHTML = "punto de interseccion = " + "(" + arr[1] + "," + arr[0] + ")";
                p1 = x/2 + (30 * arr[1]) - 80
                p2 = y/2 - (30 * arr[0]) - 20
                cd6.fillText("(" + arr[1] + "," + arr[0] + ")", p1+15, p2, 200);

                px2 = x/2 + (30 * x2 ) - 80//linea 2
                py2 = y/2 - (30 * arr[3] ) - 20
                cd6.fillText(a + "x + " + b + "y = " + c, px2+10, py2, 200); 

                px2 = x/2 + (30 * x4 ) - 80//linea 1
                py2 = y/2 - (30 * (arr[5]*1) ) - 20
                cd6.fillText(d + "x + " + e + "y = " + f, px2+10, py2, 200);
        }
}
window.onload = exhibirLineas();
