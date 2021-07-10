const person = { name: 'harris', age: 32, company: 'Amazon', Salary: 2000, address: 'dhaka' };

const { address, age } = person;
// console.log(address, age);


const friends = ['rahim', 'karim', 'sajib', 'tarun', 'michael'];

const [firstFriend, ...restfriend] = friends;

// console.log(firstFriend, restfriend);

const details = {
    name: 'thomas',
    info: {
        addressd: 'Dhaka',
        fathersName: 'Kalam'
    }
}
const { addressd } = details.info;
console.log(address);