/*
TEST RESULT GRADING

We are writing a program for teachers that helps them grade test results.
The program receives the test results as an array of objects; each object
contains the name of a student and their test score (see below).

1a. Print the names and the number (the count) of the students who passed the test (had at least 40 points).
2a. Print the average score.
3a. Print the name of the student who had the highest score.
4a. Print the percentages of passes and failures (e.g. 60% passed and 40% failed).
5a. Grade the results A-F and print a list of the students' names with their grades.
    Use the following grading scale:
    - 0-39: F
    - 40-54: D
    - 55-69: C
    - 70-84: B
    - 85-100: A

1b. Write a function that takes the array of results as argument and returns an array of the
    names of the students who passed the test (had at least 40 points).
2b. Write a function that takes the array of results as argument and returns the average score.
3b. Write a function that takes the array of results as argument and returns the name of the student 
    who had the highest score.
4b. i.  Write a function that takes the array of results as argument and returns the percentage of
        passed tests.
    ii. Using the previous function, write another function that returns the percentage of failed tests.
5b. i.  Write a function that takes a test score as argument and returns the grade (A-F).
    ii. Using the previous function, add a `grade` property to each object in the array of test results.
*/
const results = [
  { student: "Gytha Wheatley", score: 44 },
  { student: "Alishia Thorpe", score: 83 },
  { student: "Zack Vernon", score: 59 },
  { student: "Jaclyn Elliott", score: 38 },
  { student: "Ashlynn Albinson", score: 66 },
  { student: "Slade Marchand", score: 24 },
  { student: "Karen Warwick", score: 90 },
  { student: "Michael Foster", score: 65 },
  { student: "Dove Siddall", score: 39 },
  { student: "Frederick Pond", score: 72 },
];

