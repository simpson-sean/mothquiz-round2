// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsYes } from "../utils.js";

const test = QUnit.test;

test('when user enters Y it returns true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('Y');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when user enters N expect false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('N');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
