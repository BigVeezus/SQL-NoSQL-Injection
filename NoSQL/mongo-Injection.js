// We know that MongoDB supports regex with the operator $regex so we can pass this operator instead of a String and use a regex that accepts anything ,*:

[
  {
    email: {
      $regex: ".*",
    },
    password: {
      $regex: ".*",
    },
  },
];

// Attackers can exploit MongoDB by inserting malicious code in place of the operator. This technique works even for queries that don’t require user input. For example:
`db.myCollection.find( { $where: function() { return obj.credits—obj.debits < 0; } } )`;

// An attacker can assign data to a PHP variable by contaminating HTTP parameters. The contaminated parameters can trigger MongoDB errors by creating $where variables—the parameter contamination indicates that the query is invalid. The $where value is enough to expose a vulnerability even without the actual $where string. The attacker can fully exploit this vulnerability by inserting the following script:

`$where: function() { 
  //inserted arbitrary JavaScript 
}`;
