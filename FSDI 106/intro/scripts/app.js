console.log("INTRO");




window.onload = runprogram;

function loadData(){
    console.log('calling the server');

}
function sayHello(name){
    console.log("Hello" + name);
}

    function calculateTaxes(year, income){

    
    const toal = income / year;

    return total:
    }

/*
    function someMath(){
        let nums = [12,4,1,56,57,29,87,18,90,28,11,84,58,2,95,67,24,6];

        for(let i=0; i<nums.length; i++){
            let numb = nums[i];
            console.log(numb);
        }

// 2 - print numbers greater or equal to 50
for(let i=0; i<nums.length; i++){
    let numb = nums [i];
    if(numb>=50){
        console.log(numb);
        
    }
}


        function someMath() {
            let nums = [12, 4, 1, 56, 57, 29, 87, 18, 90, 28, 11, 84, 58, 2, 95, 67, 24, 6];
            
            // Calculate the sum of the numbers
            let sum = nums.reduce((acc, num) => acc + num, 0);
        
            // Calculate the average of the numbers
            let average = sum / nums.length;
        
            // Find the maximum and minimum values
            let max = Math.max(...nums);
            let min = Math.min(...nums);
        
            // Print the results
            console.log("Sum:", sum);
            console.log("Average:", average);
            console.log("Max:", max);
            console.log("Min:", min);
        }
        
        // Call the function to see the results
        someMath();*/

    }


    function runprogram(){
    console.log('page loaded');

    loadData();


    sayHello ("Glenda");
    sayHello ("Irvin");
    sayHello("Eduardo");

    calculateTaxes(2023, 80000);
    console.log("total to pay for 2023: + taxes");

    ageMessage(100);

    let answer = sum(21, 21);
    console.log("The answer is:" + answer);
}

window.onload = runprogram;