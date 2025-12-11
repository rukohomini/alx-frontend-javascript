// Teacher interface definition
interface Teacher {
  readonly firstName: string;       // readonly: only set at initialization
  readonly lastName: string;        // readonly: only set at initialization
  fullTimeEmployee: boolean;        // mandatory
  location: string;                 // mandatory
  yearsOfExperience?: number;       // optional
  [key: string]: any;               // allow any other properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;          // required for Directors
}

// Existing Teacher objects
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

// New Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

// Log objects to console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
