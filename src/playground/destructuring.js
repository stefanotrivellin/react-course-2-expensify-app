//
// Object destructuring
//

// const person = {
//     name: 'Stefano',
//     age: 32,
//     location: {
//         city: 'Avigliana',
//         temp: 26
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3', '$3.50', '$3.75'];

const [coffe, , mediumPrice] = item;

console.log(`A medium ${coffe} costs ${mediumPrice}.`);