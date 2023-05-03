
        function addNumbers()
        {
           var num1 = document.getElementById("number1").value;
           var num2 = document.getElementById("number2").value;
           var sum = parseInt(num1) + parseInt (num2);
           document.getElementById("result").value = sum;
        }
        function subtractNumbers()
        {
           var num3 = document.getElementById("number1").value;
           var num4 = document.getElementById("number2").value;
           var sub = parseInt(num3) - parseInt (num4);
           document.getElementById("result").value = sub;
        }
        function multiNumbers()
        {
           var num5 = document.getElementById("number1").value;
           var num6 = document.getElementById("number2").value;
           var multi = parseInt(num5) * parseInt (num6);
           document.getElementById("result").value = multi;  
        }
        function divideNumbers()
        {
           var num7 = document.getElementById("number1").value;
           var num8 = document.getElementById("number2").value;
           var divide = parseInt(num7) / parseInt (num8);
           document.getElementById("result").value = divide;  
        }
        function clearNumbers()
        {
           var num9 = document.getElementById("number1").value = " ";
           var num10 = document.getElementById("number2").value = " ";
           var Clear = document.getElementById("result").value = " ";
           document.getElementById("result").value = clear; 
        }
        function about()
        {
           var about = document.getElementById("result").value;
           alert("Work of Yvess Agad and Jhenny Zyrah Cabrera") + about;
        }

    