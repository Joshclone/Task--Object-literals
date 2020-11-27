// Object literal of employees
const employee = {
    "alfred": {
        age: 47,
        years: 20,
        performance: 7,
        salary: 10000
    },

    "john": {
        age: 55,
        years: 26,
        performance: 10,
        salary: 14000
    },

    "joshua": {
        age: 60,
        years: 35,
        performance: 9,
        salary: 20000
    },

    "daniel": {
        age: 30,
        years: 5,
        performance: 7,
        salary: 10500
    },

    "jamie": {
        age: 40,
        years: 14,
        performance: 6,
        salary: 13000
    },
}


const companyRaiseData = (data) => {
    // Function to determine the percentage raise
    const getPercentRaise = (years, performance) => {
        let raiseInSalary = (years / 10) * performance;
        return raiseInSalary;
    }

    // Function to determine the new increased salary
    const getIncreasedSalary = (age, years, performance, salary) => {
        let increasedSalary = ((getPercentRaise(years, performance) / 100) * salary) + salary;
        if (age > 50) {
            return increasedSalary += 200;
        } else if (age > 30) {
            return increasedSalary += 100;
        } else {
            return increasedSalary;
        }
    }

    // Object literal of new percentage raise and increased salaries
    const newData = {
        "percentRaise": {
            alfred: getPercentRaise(20, 7),
            john: getPercentRaise(26, 10),
            joshua: getPercentRaise(35, 9),
            daniel: getPercentRaise(5, 7),
            jamie: getPercentRaise(14, 6)
        },

        "salaries": {
            alfred: getIncreasedSalary(47, 20, 7, 10000),
            john: getIncreasedSalary(55, 26, 10, 14000),
            joshua: getIncreasedSalary(60, 35, 9, 20000),
            daniel: getIncreasedSalary(30, 5, 7, 10500),
            jamie: getIncreasedSalary(40, 14, 6, 13000)
        }
    }

    // Function to determine which employee has atleast 15% raise
    const get15PercentRaise = () => {
        const percentList = [];
        const employeeNames = Object.keys(newData.percentRaise); //Converts Object properties to an array
        const percents = Object.values(newData.percentRaise); //Converts Object values to an array
        for (let i = 0; i < percents.length; i++) {
            if (percents[i] >= 15) {
                percentList.push(employeeNames[i]);
            }
        }
        return percentList;
    }

    // Function to calculate the sum of all employees' salaries before increase
    const getSumOfOldSalaries = () => {
        const sumOfOldSalaries = employee.alfred.salary + employee.john.salary +
            employee.joshua.salary + employee.daniel.salary + employee.jamie.salary;
        return sumOfOldSalaries;
    }

    // Function to calculate the sum of all employees' salaries after increase
    const getSumOfNewSalaries = () => {
        const arrOfNewSalaries = Object.values(newData.salaries);
        const sumOfNewSalaries = arrOfNewSalaries.reduce((a, b) => a + b);
        return sumOfNewSalaries;
    }

    // Function to determine the overall payout increase
    const getOverallPayoutIncrease = () => getSumOfNewSalaries() - getSumOfOldSalaries();

    return {
        salaries: [newData.salaries],
        raiseBy15Percent: get15PercentRaise(),
        overallPayoutIncrease: getOverallPayoutIncrease()
    }
}

console.log(companyRaiseData());
