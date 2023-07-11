1. SQL Injection Based on 1=1 is Always True



"If there is nothing to prevent a user from entering "wrong" input, the user can enter some "smart" input like this:"

UserId: 105 OR 1=1

SELECT * FROM Users WHERE UserId = 105 OR 1=1;

"The SQL above is valid and will return ALL rows from the "Users" table, since OR 1=1 is always TRUE."

SELECT UserId, Name, Password FROM Users WHERE UserId = 105 or 1=1;

"A hacker might get access to all the user names and passwords in a database, by simply inserting 105 OR 1=1 into the input field."



2. SQL Injection Based on "=" is Always True

"UserId": " or ""="
"Password": " or ""="

-- The code at the server will create a valid SQL statement like this:
SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""=""

"The SQL above is valid and will return all rows from the "Users" table, since OR ""="" is always TRUE."