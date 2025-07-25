// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 == 1) {
            console.log(i);
        } else {
            continue;
        }

        if (count < 0) {
            console.log("Cannot divide negative numbers");
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (!userName || age == null) {
        console.log('Please enter a valid userName and age.')
        return;
    }
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("Exercise 3:\n=========\n");

function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log(`${x, y} is in Quadrant 1`);
    } else if (x < 0 && y < 0) {
        console.log(`${x, y} is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`${x, y} is in Quadrant 4`);
    } else if (x < 0 && y > 0) {
        console.log(`${x, y} is in Quadrant 2`);
    } else if (x = 0) {
        console.log(`${x, y} is on the X axis`);
    } else if (y = 0) {
        console.log(`${x, y} is on the Y axis`);
    } else if (x = 0, y = 0) {
        console.log(`{x, y} is at the point of o;rigin`)
    } else {
        console.log("Not in any quadrant");
    }
}

    // Exercise 4 Section
    console.log("Exercise 4:\n=========\n");

    function whichTriangle(sideA, sideB, sideC) {
        let triangleType = "";
        if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB){
            if (sideA == sideB && sideA == sideC) {
                triangleType = "equilateral";
            } else if (sideA == sideB || sideA == sideC) {
                triangleType = "isosceles";
            } else {
                triangleType = "scalene";
            }
            console.log(`Sides [${sideA}, ${sideB}, ${sideC}] form a Triangle of Type: ${triangleType}`);
        } else
            console.log(`Sides [${sideA}, ${sideB}, ${sideC}] do not form a triangle.`)
    }

    // Exercise 5 Section
    console.log("Exercise 5:\n=========\n")

    function dataUsage(planLimit, day, usage) {
        let targetAvg = planLimit / 30;
        let daysRemaining = 30 - day;
        let actualAvg = usage / day
        let remainingData = planLimit - usage;
        let recommendedUsage = remainingData / daysRemaining;
        let predictedOverage = usage - (targetAvg * day);

        console.log(`${day} days use, ${daysRemaining} days remaining.`);
        console.log(`Average daily use targe is: ${targetAvg} GB/day.`);

        if (usage > planLimit) {
            console.log("You have exceeded your data limit.");
        } else if (actualAvg > targetAvg) {
            console.log(`You are exceeding your target daily use (${actualAvg} GB/day) and are projected to go over your plan limit by ${predictedOverage} GB.`);
            console.log(`You can use up to ${recommendedUsage} GB/day to stay within your plan.`);
        } else if (actualAvg < targetAvg) {
            console.log(`You are under your target daily usage (${actualAvg} GB/day).`);
            console.log(`You can use up to ${recommendedUsage} GB/day for the remainder of the period.`);
        } else {
            console.log(`You are on track with your average daily use (${actualAvg} GB/day.)`);
        }
    }
