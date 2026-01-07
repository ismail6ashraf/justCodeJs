
let div = document.createElement("div");
div.className = "content";

let antheDiv = document.createElement("div"); // contains evry nav 
antheDiv.className = "nav";
antheDiv.style.cssText = "display:flex ; justify-content: space-between ; padding : 0 50px" ;

let h1 = document.createElement("h1");
h1.style.cssText = "font-size : 30px; font-weight: bold;";

let textH = document.createTextNode("ismail");
h1.appendChild(textH);


let ul = document.createElement("ul");
ul.style.cssText = "list-style : none; display:flex; padding : 20px";

                    // li
let oneLi = document.createElement("li");
oneLi.style.paddingRight = "8px";

let textUl = document.createTextNode("Home");
oneLi.appendChild(textUl);

let twoLi = document.createElement("li");
twoLi.style.paddingRight = "8px";
let texttwoLi = document.createTextNode("About");
twoLi.appendChild(texttwoLi);

let threeLi = document.createElement("li");
threeLi.style.paddingRight = "8px";
let threeTextLi = document.createTextNode("Service");
threeLi.appendChild(threeTextLi);

let fourLi = document.createElement("li");
fourLi.style.paddingRight = "8px";
let fourTextLi = document.createTextNode("Content");
fourLi.appendChild(fourTextLi);

ul.appendChild(oneLi);
ul.appendChild(twoLi);
ul.appendChild(threeLi);
ul.appendChild(fourLi);

                // End Li 

                // Start button 
let divContent = document.createElement("div");
divContent.className= "container";
divContent.style.cssText = "background-color : #b1b1b1; width:100% ; height : 50vh ; display: flex; justify-content:center;";
                        // let div 1
let condiv = document.createElement("div");
let btn = document.createElement("button");
btn.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn = document.createTextNode("1");
btn.appendChild(textBtn);
condiv.appendChild(btn);


                        // let div 2
let condiv1 = document.createElement("div");
let btn1 = document.createElement("button");
btn1.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn1 = document.createTextNode("2");
btn1.appendChild(textBtn1);
condiv1.appendChild(btn1);

                        // let div 3
let condiv2 = document.createElement("div");
let btn2 = document.createElement("button");
btn2.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn2 = document.createTextNode("3");
btn2.appendChild(textBtn2);
condiv2.appendChild(btn2);

                        // let div 4
let condiv3 = document.createElement("div");
let btn3 = document.createElement("button");
btn3.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn3 = document.createTextNode("4");
btn3.appendChild(textBtn3);
condiv3.appendChild(btn3);

                        //let div 5
let condiv4 = document.createElement("div");
let btn4 = document.createElement("button");
btn4.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn4 = document.createTextNode("5");
btn4.appendChild(textBtn4);
condiv4.appendChild(btn4);

                        // let div6
let condiv5 = document.createElement("div");
let btn5 = document.createElement("button");
btn5.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn5 = document.createTextNode("6");
btn5.appendChild(textBtn5);
condiv5.appendChild(btn5);

                        //let div 7
let condiv6 = document.createElement("div");
let btn6 = document.createElement("button");
btn6.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn6 = document.createTextNode("7");
btn6.appendChild(textBtn6);
condiv6.appendChild(btn6);

                        //let div 8
let condiv7 = document.createElement("div");
let btn7 = document.createElement("button");
btn7.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn7 = document.createTextNode("9");
btn7.appendChild(textBtn7);
condiv7.appendChild(btn7);
                        //let div 9
let condiv8 = document.createElement("div");
let btn8 = document.createElement("button");
btn8.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn8 = document.createTextNode("9");
btn8.appendChild(textBtn8);
condiv8.appendChild(btn8);
                        //let div 10
let condiv9 = document.createElement("div");
let btn9 = document.createElement("button");
btn9.style.cssText = "color : white; padding: 20px ; margin: 20px ; background: black ; border-radius: 50%; cursor: pointer;";
let textBtn9 = document.createTextNode("10");
btn9.appendChild(textBtn9);
condiv9.appendChild(btn9);

divContent.appendChild(condiv);
divContent.appendChild(condiv1)
divContent.appendChild(condiv2);
divContent.appendChild(condiv3);
divContent.appendChild(condiv4);
divContent.appendChild(condiv5);
divContent.appendChild(condiv6);
divContent.appendChild(condiv7);
divContent.appendChild(condiv8);
divContent.appendChild(condiv9);


antheDiv.appendChild(h1);
antheDiv.append(ul);
div.appendChild(antheDiv);
div.appendChild(divContent);
document.body.appendChild(div);