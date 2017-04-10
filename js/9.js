
var ctx = can.getContext('2d');


                        function koord(mash)//осі координат
                        {
                            var tm1 = -20, tm2 = 9;
                            var i, numV, numG;

                            ctx.beginPath();
                            ctx.clearRect(0, 0, can.width, can.height);
                            ctx.strokeStyle = "black";

                            ctx.moveTo(1, 250);//осі координат
                            ctx.lineTo(1000, 250);
                            ctx.moveTo(500, 250);
                            ctx.lineTo(500, 1);
                            ctx.lineTo(500, 500);

                            for (i = 0; i <= 1000 - mash; i += mash) { // х
                                ctx.strokeText(tm1, i + 5, 265);//цифри на осях
                                tm1 += 1;
                                ctx.moveTo(i, 253);
                                ctx.lineTo(i, 247);
                            }

                            for (i = mash; i <= 500; i += mash) {  //н у
                                ctx.strokeText(tm2, 530, i);//цифри на осях
                                tm2 -= 1;
                                ctx.moveTo(497, i);
                                ctx.lineTo(503, i);
                            }

                            ctx.lineWidth = 2;

                            ctx.moveTo(1000, 250);//стрелка х
                            ctx.lineTo(985, 245);
                            ctx.lineTo(990, 250);
                            ctx.lineTo(985, 255);
                            ctx.lineTo(1000, 250);

                            ctx.moveTo(500, 1);//стрелка у
                            ctx.lineTo(505, 15);
                            ctx.lineTo(500, 10);
                            ctx.lineTo(495, 15);
                            ctx.lineTo(500, 1);

                            ctx.strokeText("X", 990, 270);
                            ctx.strokeText("Y", 530, 15);
                            // ctx.strokeText("0",490,245);

                            numG = 10;
                            numV = 10;

                           

                            ctx.stroke();
                            ctx.closePath();
                        }


                        function checkInitialValues(firstx, lastx, accuracy) {
                            if (!firstx && firstx != 0) return "Error"
                            if (!lastx && lastx != 0) return "Error"
                            if (lastx - firstx <= accuracy) return "Error";
                            if (firstx >= lastx) return "Error";
                            if (!accuracy && accuracy != 0) return "Error";
                            if (accuracy < 0) return "Error";

                            return null;
                        }

                        function evaluateFunction(x) {
//                            return Math.pow(x,3)-3*x*x+12*x-9;
                            return Math.pow(x,3)-3*x*x+3;

                    
                        }



                        var state;
						

                        function makeStep(m, ky, kx)//вираховуємо значення
                        {
//  початкове                          

                  var firstx=parseFloat(document.getElementById("startInput").value);
                        
                            
// кінцеве                           
                            var lastx = parseFloat(document.getElementById("stopInput").value)
//наближення                             
                            var accuracy = 0.001;
//                                якщо змінені параметри то спочатку
                            if (!state || state.firstx != firstx || state.lastx != lastx || state.accuracy != accuracy) {

                                drawer.init(m, kx, ky);

                                var errorMessage = checkInitialValues(firstx, lastx, accuracy);
                                if (errorMessage) {
                                    alert(errorMessage);
                                    return;
                                }

                                state = {
                                    firstx: firstx,
                                    lastx: lastx,
                                    accuracy: accuracy,
                                    currentX: firstx
//                                   
                                };
                            }

                            if (state.currentX > lastx) {
                                drawer.finishDraw();
                                alert("Закінчено");
								state = null;
                                return;
                            }

                            var step = 0.1;
                            var x = state.currentX;
                            var y = evaluateFunction(x);
                            state.currentX += step;

                            drawer.drawXY(x, y);
                        }


                        function reset()
                        {
                            state = null;
                            drawer.reset();
                        }


                        var ctx = can.getContext('2d');

                        var drawer = {

                            init: function (mash, koefY, koefX)
                            {
                                this.hasPrevPoint = false;
                                this.mash = mash;
                                this.kX = koefX;
                                this.kY = koefY;

                                this.reset();
                            },

                            reset: function () {
                                koord(this.mash);
                                ctx.beginPath();
                                ctx.strokeStyle = "red";
                                otv.value = null;
                            },

                            hasPrevPoint: false,

                            drawXY: function (x, y) {

                                if (!y && y != 0) {
                                    otv.value += "\n" + "Значення не існує" + "\n" + "\n";
                                    return;
                                }

                                var y1 = (y > 0) ? 250 - parseFloat(y * this.kY) : 250 + parseFloat(Math.abs(y) * this.kY);

                                if (this.hasPrevPoint) {
                                    ctx.lineTo(500 + parseFloat(x * this.kX), y1);
                                    ctx.stroke();
                                }
                                else {
                                    ctx.moveTo(500 + parseFloat(x * this.kX), y1);
                                    this.hasPrevPoint = true;
                                }

                                otv.value += "x = " + x.toFixed(3) + " | y = " + y.toFixed(3) + "\n";
                            },


                            finishDraw: function () {
                                ctx.closePath();
                            }
                        }
						

          ;
//
//                         
////context.beginPath();
////context.moveTo(0,0);
////context.fillStyle="white";
////context.fillRect(0, 0, 400, 100);
//
//
////
////var x0=500;
////for (var x=500; x < canvas.width; x++) {
////  var q=x-x0;    
////  var y = f(q);
////    var z=500-(y+y0);
////  context.lineTo(x, z );
////  x0=x0-1;
////}
//    
//

function copy() {
    var imgData = context.getImageData(0, 0, 1050, 500);
    
}
//
//
function f(x) {
//
// return Math.pow(x,3)-18*x-83;
    return Math.pow(x,3)-3*x*x+3;
    
    
    
}
function pf(x){
    return 6*x-6;
}

var e=0.001;
var i=0;

var a=-5;
var b=5;
var x0,x1;
var l=f(a)*pf(a);
if(l>0)
{x0=a;x1=b;}
else {x0=b;x1=a;};
//var x0=a;
//var x1=b;
var x;
var h,t;
////while(Math.abs(x1-x0)>=e){
////    x0=x;
////    x=x0-((x0-x1)/(f(x0)-f(x1)))*f(x0);
////    
////    i=i+1;
////   document.write(x.toFixed(4))};
do{
 
h=(x1-x0)/(f(x1)-f(x0));
x=x1-h*f(x1);
t=x1;
x0=t;
x1=x;
    document.write(x.toFixed(4)+"   "  );
//document.write(x.toFixed(4) +"   ");
tv.value +=x+"\n"
}while(Math.abs(x1-x0)>e);
ta.value="Результат  "+x;

