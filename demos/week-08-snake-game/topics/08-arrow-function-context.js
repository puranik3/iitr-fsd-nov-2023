const payroll = {
    employees: [
        { name: 'John', dept: 'Finance', salary: 100000 },
        { name: 'Jane', dept: 'IT', salary: 125000 },
        { name: 'Mark', dept: 'Finance', salary: 150000 },
    ],
    hikePercentages: {
        Finance: 20,
        IT: 10
    },
    // hike: function() {
    hike() {
        console.log('hike() : this.hikePercentages = ', this.hikePercentages); // correct -> payroll.hikePercentages

        this.employees.forEach((employee) => { // iterator function
            const dept = employee.dept;
            console.log(dept);

            console.log('iterator function : this.hikePercentages = ', this.hikePercentages); // correct -> payroll.hikePercentages
            const hikePercentage = this.hikePercentages[dept];
            employee.salary = (hikePercentage / 100) * employee.salary + employee.salary;
        });
    }
}

payroll.hike();
console.log(payroll);