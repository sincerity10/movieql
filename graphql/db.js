export const people = [
    {
        id:0,
        name: "Gonho LEE",
        age: 25,
        gender: "male"
    },
    {
        id:1,
        name: "Peter",
        age: 31,
        gender: "male"
    },
    {
        id:2,
        name: " Jennifer",
        age: 27,
        gender: "female"
    },
    {
        id:3,
        name: "Chloe",
        age: 29,
        gender: "female"
    },
    {
        id:4,
        name: "Kane",
        age: 34,
        gender: "male"
    },
    {
        id:5,
        name: "John",
        age: 23,
        gender: "male"
    }
];

const movie = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 0.1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather",
        score: 90
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}