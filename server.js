// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const PORT = 8000;

const callBackFunction =  (req, res) => {
  res.json({message: "dope"})
}

// --- MIDDLEWARE ---
// app.use(express.json(), express.urlencoded({ extended: true }));
// ------------------

app.get("/api/demo", callBackFunction)

// const createUser = (req, res) => {
//   res.json({
//     password: 12345,
//     email: 'Dojo@123.com',
//     phoneNumber: 911,
//     lastName: 'Choi',
//     firstName: 'Michael',
//     _id: 1,
//   })
// }

//create faker user
const createUser = () => {
  const newFake = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
  };
  return newFake;
};

const newFakeUser = createUser();
// console.log("**********FAKER USER***********");
console.log(newFakeUser);

app.get('/api/users/new', (req, res) => {
  res.json(newFakeUser)
});

// app.get("/api/users/new", createUser)

// const createCompany = (req, res) => {
//   res.json({
//     _id: 1,
//     name: 'Dang Dojo',
//     address: {
//       street: 'baker street',
//       city: 'london town',
//       state: 'UK',
//       zipCode: 911,
//       country: 'ENGLAND',
//     },
//   })
// }

//create faker company
const createCompany = () => {
  const newFake = {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newFake;
};

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get('/api/companies/new', (req, res) => {
  res.json(newFakeCompany)
});

// app.get("/api/companies/new", createCompany)

// app.get("/api/user/company", [createCompany, createUser])


const newFakeCompany = createCompany();
// console.log("************FAKER COMPANY************")
console.log(newFakeCompany);



app.get('/api/user/company', (req, res) => {
  res.json({
    user: newFakeUser,
    company: newFakeCompany
  })
});


app.post("/api/users", (req, res) => {
  console.log(req)
})

app.listen(PORT, () => console.log("server up on PORT:", PORT))






