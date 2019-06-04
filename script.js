
      var answer=function(){
        var input=[];
        
        input.push(parseFloat(prompt("Enter side A: ")));
         if (isNaN(input[0])=== true){
           alert("Please enter a number in the field");
         }else{
         input.push(parseFloat(prompt("Enter side B: ")));
           if (isNaN(input[1])=== true){
               alert("Please enter a number in the field");
             }else{
             input.push(parseFloat(prompt("Enter side C: ")));
               if (isNaN(input[2])=== true){
                   alert("Please enter a number in the field");
               }else{
               if((input[0]+input[1])<=input[2] || (input[1]+input[2])<=input[0] || (input[0]+input[2])<=input[1]){
                   alert("Not a Triangle");
               }
               else if(input[0]===input[1] && input[0]===input[2] && input[1]===input[2]){
                   alert("Equilateral");
               }
               else if(input[0]===input[1] || input[1]===input[2] || input[0]===input[2]){
                   alert("Isosceles");
               }
               else if((input[0]+input[1])>=input[2] || (input[1]+input[2])>=input[0] || (input[0]+input[2])>=input[1]){
                   alert("Scalene");
               }
               else{
                   alert("Value entered must be a number");
               }
             }
           }
         }
        } 