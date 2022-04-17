const calcButton = document.getElementsByClassName("calcButton");

const add = function(a,b) {
return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = (a,b) => {
    return a*b;
}


const divide = (a,b) => {
    return a/b;
}


const operate = (op, a, b) => {
    return op(a,b);
}

function genDivs(v){
    const e = document.querySelector('.calculator'); 
    var display = document.createElement('div');
    display.className = "display";
    display.style.width = "100%";
    display.style.height = "100px";
    e.appendChild(display)
    for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var x = 1; x <= v; x++){ 
        var cell = document.createElement("div"); 
        cell.className = "calcButton";
        cell.style.width = "100%";
        let height = 700 / parseInt(v);
        cell.style.height = `${height}px`
        row.appendChild(cell); 
    } 
    e.appendChild(row); 
    }
    for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener("click", () => {
        calcButton[i].className += " selected";
        selectedValue = calcButton[i].textContent
        queryString = populateDisplay(selectedValue, display);
        });
        calcButton[i].id = i;
    }

    numOrder = ["7", "8", "9", "+", "4","5","6","-","1","2","3","*","0",".","=","/"]
    for (let i = 15; i >= 0; i--){
        calcButton[i].textContent = numOrder[i]    
    }
    const clearBtnDiv = document.createElement('div');
    e.appendChild(clearBtnDiv)
    clearBtnDiv.className = "clearButtonDiv"
    const clearBtn = document.createElement('button');
    clearBtn.textContent='Clear';
    clearBtnDiv.appendChild(clearBtn);
    clearBtn.className = "clearButton"
    clearBtn.addEventListener('click', () => {
        display.textContent = ""
        numDot = 0    
    })
}

var numDot = 0
function populateDisplay(selectedValue, display) {
    if(selectedValue == "="){
            if(display.textContent){
                var calcResult = doCalc(display.textContent)
                var calcResultRounded = Math.round(calcResult * 1000) / 1000
                if(Number.isNaN(calcResultRounded)){
                    display.textContent = display.textContent
                }
                else{
                    display.textContent = String(calcResultRounded)
                }
            if(display.textContent.includes(".")){
                numDot++
            }
        }
    }
    else if(selectedValue == "+" || selectedValue == "-" || selectedValue == "*" || selectedValue == "/"){
        display.textContent = display.textContent + " " + selectedValue + " "
        numDot = 0
    }
    else if(selectedValue == "."){
        if(numDot==0){
            display.textContent = display.textContent + selectedValue
            numDot++
            console.log(numDot)
        }
        else{
            display.textContent = display.textContent + ""
        }
    }
    else{
        display.textContent = display.textContent + selectedValue
    }
    checked = checkQuery(display.textContent)
    if(checked == true){
        checkedArr = display.textContent.split(" ")
        storedOp = checkedArr.at(-2)
        console.log(storedOp)
        checkedArr.pop()
        console.log(checkedArr)

        var newCalcResult = doCalc(display.textContent);
        var newCalcResultRounded = Math.round(newCalcResult * 1000) / 1000;
        console.log("new",newCalcResultRounded)
        display.textContent = String(newCalcResultRounded) + " " + storedOp+ " "
    }

    return display.textContent
    
    function doCalc(query){
        queryArr = query.split(" ")
        for(i=0; i<3 ;i++){
            if(queryArr.at(2) === ""){
                a = queryArr[0]
                return a 
            } 
           else if(queryArr[i] == "+"){
                a = Number(queryArr[i-1])
                b = Number(queryArr[i+1])
                return operate(add, a, b)
           }
           else if(queryArr[i] == "-"){
                a = Number(queryArr[i-1])
                b = Number(queryArr[i+1])
                return operate(subtract, a, b)
            }
            else if(queryArr[i] == "*"){
                a = Number(queryArr[i-1])
                b = Number(queryArr[i+1])
                return operate(multiply, a, b)
            }
            else if(queryArr[i] == "/"){
                a = Number(queryArr[i-1])
                b = Number(queryArr[i+1])
                return operate(divide, a, b)
            }
        }
    }
    function checkQuery(query){
        // console.log(query.split(" "))
        return query.split(" ").length > 3
        }

}

