/* Task 1: Compile Participant Details with Shorthand Property Names */

const name = "Crystal";
const age = 29;
const studyField = "Software Development";

const participant = {
  name,
  age,
  studyField
};

console.log(participant);


/* Task 2: Implement a Shorthand Function for Participant Info */

const participantWithMethod = {
  ...participant,

  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  }
};

participantWithMethod.displayInfo();


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */

const participantWithArrowMethod = {
  ...participant,

  displayInfo: () => {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  }
};

participantWithArrowMethod.displayInfo();

/*
 * Observations:
 * Arrow functions do not have their own `this`.
 * Instead, they inherit `this` from the surrounding scope.
 * Because of this, `this.name`, `this.age`, and `this.studyField`
 * do not refer to the object and will likely be undefined.
 * Regular shorthand methods should be used when accessing object properties with `this`.
 */


/* Task 4: Using Computed Property Names */

function updateParticipantInfo(obj, propertyName, value) {
  return {
    ...obj,
    [propertyName]: value
  };
}

const updatedParticipant = updateParticipantInfo(
  participant,
  "studyField",
  "Computer Science"
);

console.log(updatedParticipant);
