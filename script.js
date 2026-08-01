/*Marks Example*/
        let age = 40;
        if(age >= 20){
            console.log("You are Eligible to vote");
        }else{
            console.log("You are Not Eligible to vote");
        }


/*Grade Example*/
        let grade = "A";

        if(grade == "A"){
            console.log("Excellent");
        }else if(grade == "B"){
             console.log("Good");
        }else if(grade == "C"){
            console.log("Average");
        }else if(grade == "D"){
            console.log("Below Average");
        }else{
            console.log("Fail");
        }

/*weight example*/
        let weight = 45;
        if(weight == 59){
            console.log("Rejected");
        }else if(weight >=60){
            console.log("Accepted");
        }else if(weight <=59){
            console.log("Refer Category B");
        }
/* And BMI Example*/
        let bmi = 23;
        if(bmi < 18.5){
            console.log("underweight");
        }else if(bmi >= 18.5 && bmi <= 24.9){
            console.log("Normal weight");
        }else if(bmi >=25 && bmi <= 29.9){
            console.log("Overweight");
        }else if(bmi >=30 && bmi <= 39.9){
            console.log("obese");
        } else{
            console.log("extremely obese");
        }
/* Or Example */
        let domicile = "Punjab";
        let userage = 25;
        if(domicile == "Punjab" || userage >=18){
            console.log("Eligible for Voting");
        }else{
            console.log("Not Eligible for Voting");
        }

        let isRaining = true;
        if(isRaining != false){
            console.log("Go for a walk");
        }


        let weekday = "Sunday";
        if(weekday !== "Sunday"){
            console.log("Go to Work");
        }else {
            console.log("Enjoy your weekend");
        }


