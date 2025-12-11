interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
  contract: false
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Paris',
  subject: 'Math'
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
