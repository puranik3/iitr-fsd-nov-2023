// ... (overloaded with "rest")

// copy / merge objects and arrays
const nums1 = [1, 2, 3], nums2 = [4, 5, 6];
// const nums3 = [...nums1, ...nums1, ...nums2];
const nums3 = [...nums1, ...nums2];
console.log(nums3);

const john = {
    name: 'John',
    age: 32
};

const johnEmployment = {
    name: 'Jonathan',
    companyName: 'Example Consulting',
    role: 'Fullstack Developer'
};

const johnMasterDetails = {
    ...john, // name: john.name, age: john.age,
    ...johnEmployment // name: johnEmployment.name, companyName: .......
};

console.log(johnMasterDetails);