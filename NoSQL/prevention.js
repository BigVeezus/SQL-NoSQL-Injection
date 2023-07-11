--"1. Avoid Passing Request Objects Directly To ODM or ORM Functions";
// The worst thing we can do is to pass something like req.body or req.query directly to our ODM/ORM functions:

const user = await collection.findOne(req.body); // Bad Practice

// The least we can do is to use the specific fields

const user2 = await collection.findOne({ userId: req.body.id });

--"2. Use Input Validation";
("Using something like Zod, Yup, and other options.");

// Example of validating with Zod:

const loginValidator = z.object({
  email: z.string().email(),
  password: z.string(),
});

// By using objectStrict it will return an error if someone tries to add extra fields.

--"3. Sanitize User Inputs and Filters";
"Hopefully, Mongoose 6 introduced a sanitizer that you can use: “Sanitizes query filters against query selector injection attacks by wrapping any nested objects that have a property whose name starts with $ in a $eq."

const obj = { username: 'val', pwd: { $ne: null } };
sanitizeFilter(obj);
obj; // { username: 'val', pwd: { $eq: { $ne: null } } });

"By wrapping phrases in $eq it prevents injections that are trying to get more data."

"If we are not using Mongoose there are other options to consider:"

"express-mongo-sanitize is a library that checks req.body, req.params, req.query and req.headers for prohibited characters."

// "Another option is mongo-sanitize that strip out any keys which start with $ in the input."






--"4.Use the latest version of drivers"
// Many popular NoSQL products are in active development, so it is important to use the latest version and upgrade frequently. Vulnerabilities are discovered in NoSQL databases on a daily basis. For example, older versions of MongoDB were less secure and suffered from serious injection vulnerabilities, but newer versions are more secure.