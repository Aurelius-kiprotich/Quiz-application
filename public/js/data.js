const questions = [
    {
        id: 1,
        question:'What does SQL stand for?',
        choices:[
            'Strong Question Language',
            'Stractured Query Leanguag',
            'Stractured Question Language'

        ],
        answer:'Stractured Query Leanguage'
    },
    {
        id: 2,
        question:'Which SQL statement is used to extract data from a database?',
        choices:[
            'EXTRACT',
            'SELECT',
            'GET'

        ],
        answer:'SELECT'
    },
    {
        id: 3,
        question:'Which SQL statement is used to update data in a database?',
        choices:[
            'UPDATE',
            'SAVE',
            'SAVE AS'

        ],
        answer:'UPDATE'
    },
    {
        id: 4,
        question:'What SQL statementis used to delete data a data?',
        choices:[
            'REMOVE',
            'DELETE',
            'COLLAPSE'

        ],
        answer:'DELETE'
    },
    {
        id: 5,
        question:'Which SQL statement is used to insert new data in a database?',
        choices:[
            'ADD RECORD',
            'ADD NEW',
            'INSERT INTO'

        ],
        answer:'INSERT INTO'
    },
    {
        id: 6,
        question:'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
        choices:[
            'SELECT FirstName FROM Persons',
            'SELECT Person.Firstname',
            'EXTRACT FirstName FROM Persons'

        ],
        answer:'SELECT FirstName FROM Persons'
    },
    {
        id: 7,
        question:'With SQL, how do you select all the columns from a table named "Persons"?',
        choices:[
            'SELECT [all] FROM Persons',
            'SELECT * FROM Persons',
            'EXTRACT * FROM Persons'

        ],
        answer:'SELECT * FROM Persons'
    },
    {
        id: 8,
        question:'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" is "Peter"?',
        choices:[
            "SELECT [all] FROM Persons WHERE FirstName ='Peter'",
            "SELECT * FROM Persons WHERE FirstName ='Peter'",
            "SELECT [all] FROM Persons WHERE FirstName <>'Peter'"

        ],
        answer:"SELECT * FROM Persons WHERE FirstName ='Peter'"
    },
    {
        id: 9,
        question:'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?',
        choices:[
            "SELECT [all] FROM Persons WHERE FirstName LIKE %a%",
            "SELECT * FROM Persons WHERE FirstName LIKE %a'",
            "SELECT * FROM Persons WHERE FirstName = %a%"

        ],
        answer:"SELECT * FROM Persons WHERE FirstName = %a%"
    },
    {
        id: 10,
        question:'The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are true',
        choices:[
            false,
            true

        ],
        answer:true
    }
]

export default questions
