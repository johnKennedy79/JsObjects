console.log("Test Link");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);
console.table(person);

console.log(person.name);
console.log(person.age);
console.log(person.favouriteColour);

person.favouriteFood = "pizza";
console.log(person.favouriteFood);
console.table(person);

const bike = {
  Make: "Honda",
  Model: "CBR",
  SubModel: "RR",
  Colour: "Red",
  EngineCapacity: "900cc",
};
console.table(bike);

const book = {
  Title: "Shibumi",
  Author: "Trevanian (Rodney William Whitaker)",
  Language: "English",
  Published: "1979",
  Discription:
    "Shibumi is set in the 1970s and details the struggle between the Mother Company, a conspiracy of energy companies that secretly controls much of the western world, and a highly skilled assassin, Nicholaï Hel.",
};

console.table(book);

//Complex Objects
const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.author.name); //Object. object called author . object called name

console.log(blogPost.tags[0]); //object. array called tag . index 0
console.log(blogPost.tags.length); // index of the array called tags

//combining with a loop
console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":

for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
} // Output: coding, javascript, objects, arrays

//Or use a for of loop if you don't need the index:
console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}
