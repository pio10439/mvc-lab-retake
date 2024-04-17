const cars = [
    {
    id: 1,
    make: "Audi",
    model: "S3",
    year: 2018,
    color: "Grey"
    },
    {
    id: 2,
    make: "BMW",
    model: "X5",
    year: 2016,
    color: "Black"
    },
    {
    id: 3,
    make: "Ford",
    model: "Focus",
    year: 2020,
    color: "Blue"
    },
    {
    id: 4,
    make: "Toyota",
    model: "Aygo",
    year: 2022,
    color: "Green"
    },  
    {
    id: 5,
    make: "Mercedes",
    model: "CLS",
    year: 2012,
    color: "White"
    },   
]

const getCars = () => {
    return cars;
}
const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if(car){
        const { make, model, year, color } = car;
        return `Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}.`;
    }else
        return "Car doesn't exist";
}

const getCarAge = (id) => {
    const car = cars.find(car => car.id === id);
    if(car){
       const carYear = car.year;
       const car_Age = 2024 - carYear;
       return `Car is ${car_Age} years old.`;
    }else 
        return "Car doesn't exist";
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge,
};