const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  const db = await mongoose.connect('mongodb://localhost:27017/fruitsDB');

  const fruitSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true},
    score: {
      type: Number, 
      min: [0, 'Be better, ratings should be between 0-10'],
      max: [10, 'Keep it cool, ratings should be between 0-10']
    },
    review: String
    /* {
      type: String,
      required: true} */
  });
  
  const Fruit = mongoose.model("Fruit", fruitSchema);
  
  const avocado = new Fruit({
    title:  "Avocado",
    score: 4,
    //review:   "Awesome fruit!"
  });
  
  //avocado.save();

  
  
  const peopleSchema = new mongoose.Schema({
    name:  String,
    age: Number,
    favouriteFruit: fruitSchema
  });

  const strawberry = new Fruit({
    title:  "Strawberry",
    score: 9,
    review:   "The best berry!"
  });

  // strawberry.save();

  const lemon = new Fruit({
    title:  "Lemon",
    score: 2,
    review:   "Very acid!"
  });

  //lemon.save();
  
  const Person = mongoose.model("Person", peopleSchema);
  
  const person = new Person({
    name:  "Peter",
    age: 56,
    favouriteFruit: strawberry
  });

  //person.save();

  
  
  // person.save();
  
  /* const kiwi = new Fruit ({
    title: "Kiwi",
    score: 10,
    review: "Green and furry"
  });
  
  const banana = new Fruit ({
    title: "Banana",
    score: 9,
    review: "Easy to eat"
  }); */
  
  /* Fruit.insertMany([kiwi, apple], function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesfully saved all the fruits to fruitsDB")
    }
  }); */
  
  /* Fruit.deleteMany({'review': null}, function(err) {
    if (err) {
      console.log(err);
    } else {
      if (err === null) {
        console.log(err)
        console.log("None objects matched the description");
      } else {
        console.log(err)
        console.log("Succesfully removed " + err + " docs from fruitsDB");
      }
    }
  }); */
  
  /* Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      fruits.forEach(fruit => {
        console.log(fruit.title);
      })
    }
  }); */

  
  /* Fruit.findOne({title: 'Banana'},function(err, fruit) {
    if (err) {
      console.log(err);
    } 
    else {
      const person = new Person({
        name:  "George",
        age: 30,
        favouriteFruit: fruit
      });
    
      person.save();
    }
  }); */

  //Updating a document:
  /* Fruit.updateOne({title:"Peach"}, {score: 3}, (err) => {
    if (err) {
      console.log(err);
    } else {console.log("Succesfully updated the document from fruitsDB")}
  }) */

  //Updating a document:
  /* Person.updateOne({name:"John"}, {favouriteFruit: lemon}, (err) => {
    if (err) {
      console.log(err);
    } else {console.log("Succesfully updated the document from fruitsDB")}
  }) */

  
  //Deleting a document:
  /* Fruit.deleteOne({title: 'Banana'}, (err) => {
    if (err) {
      console.log(err);
    } else {console.log("Succesfully removed the document from fruitsDB")}
  }) */


  //Adding subdocuments:
  /* if(list.items.length === 0) {
                console.log('No items on list: ' + list.name);
                console.log('List id: ' + list._id);
                List.findByIdAndUpdate(list._id,{$push: {'items': {$each: [tutorial1,tutorial2,tutorial3,tutorial4]}}}, (err) => {
                    if(err) {
                        console.log(err);
                    } else {console.log('Tutorial inserted.')}});

                list.items = [tutorial1,tutorial2,tutorial3,tutorial4];
                console.log('Attempt to save tutorials');
                list.save();
                console.log('Tutorials saved');
                    
                res.redirect('/' + customListTitle);
            
                } else { */


  
  const timeoutID = setTimeout(() => {db.connection.close()},200);
  
};

