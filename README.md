# Train-Scheduler
What It Does:
This website allows users to log a train schedule.
The user can input the train name, train time, destination, and frequency.
User input information updates to a table that displays the train schedule.
Each time a user visits the page, no matter from which system, the schedule
will contain previously input information.
The schedule also displays the next arrival of given train, and how many minutes
away it is. This information is calculated in the code.

How:
This websie makes use of firebase database in order to store user input inormation.
API called moment allows us to perform time computations.
A form takes user input and adds info to the table on click of the submit button
