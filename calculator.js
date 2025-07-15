
let form = document.getElementById("form");
        let input = document.getElementById("inp");

        let onein = document.getElementById("one");
        function fun1(event) {
            let valu = onein.value;
            let but1 = input.value += valu;
            console.log(but1)
            


        }

        let twoin = document.getElementById("two");
        function two1() {
            let val = twoin.value;
            let but = input.value += val;
            console.log(but)


        }

        let threein = document.getElementById("three");
        function three1() {
            let valu3 = threein.value;
            let but = input.value += valu3;


        }

        let four = document.getElementById("four");
        function four1() {
            let valu4 = four.value;
            let but = input.value += valu4;


        }

        let five = document.getElementById("five");
        function five1() {
            let value5 = five.value;
            let but = input.value += value5;


        }
        let six = document.getElementById("six")
        function six1() {
            let value6 = six.value;
            let but = input.value += value6;


        }
        let seven = document.getElementById("seven");
        function seven1() {
            let value7 = seven.value;
            let but = input.value += value7;


        }
        let button = document.getElementById("button")
        function fun() {
            let valu8 = button.value;
            let but = input.value += valu8;


        }
        let nine = document.getElementById("nine")
        function nine1() {
            let value9 = nine.value;
            let but = input.value += value9;


        }
        let zero = document.getElementById("zero")
        function zero1() {
            let value0 = zero.value;
            let but = input.value += value0;


        }
        let plus = document.getElementById("plus")
        function plus1() {
            let valup = plus.value;
            let but = input.value += valup;


        }
        let minus = document.getElementById("minus")
        function minus1() {
            let valuem = minus.value;
            let but = input.value += valuem;


        }
        let mul = document.getElementById("mul")
        function mul1() {
            let valul = mul.value;
            let but = input.value += valul;


        }
        let divide = document.getElementById("divide")
        function divide1() {
            let valued = divide.value;
            let but = input.value += valued;


        }
        let clear = document.getElementById("clear");
        function clear1() {
            let but = input.value = '';


        }
        let equal = document.getElementById("equal");
        function equal1() {
            let totall = input.value
            let eva = eval(totall)
            let result = input.value = `${totall}  =  ${eva} `
            console.log(eva)

        }
        let min = 0;
        function back(){
            let but = input.value  ;
            console.log(input.value =but.slice(0,-1) ) 
            console.log(but )

            
            

        }

