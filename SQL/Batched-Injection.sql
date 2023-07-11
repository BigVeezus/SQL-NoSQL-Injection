"A batch of SQL statements is a group of two or more SQL statements, separated by semicolons."

"The SQL statement below will return all rows from the "Users" table, then delete the "Suppliers" table."

SELECT * FROM Users; DROP TABLE Suppliers

UserId: 105; DROP TABLE Suppliers 

-- The valid SQL statement would look like this:
SELECT * FROM Users WHERE UserId = 105; DROP TABLE Suppliers;