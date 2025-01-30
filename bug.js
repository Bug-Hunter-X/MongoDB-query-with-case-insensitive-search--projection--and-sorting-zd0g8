```javascript
const query = { name: /John/i }; // Case-insensitive search

const options = {
  projection: { _id: 0, name: 1 }, // Project only name field
  sort: { age: -1 } // Sort by age in descending order
};

collection.find(query, options).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```