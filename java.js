// Car factory
// Create a constructor function that can be used to create objects.

// The objects your factory creates should all have a "type" propety that always has the value "car".

// The factory should take in three parameters and save them to the created objects:

// make
// model
// year
// Use your function to create 10 different cars. Store all of them inside a "garage" array.

// 🤖: Nothing to see down here

function car(make, model, year) {
    this.type ="car"
    this.make = make;
    this.model = model;
    this.year = year;
  }

  console.log(new car("audi","a1",1302))
  console.log(new car("opel","a2",2207))
  console.log(new car("nissan","a3",2006))
  console.log(new car("honda","a4",2012))
  console.log(new car("bmw","a5",2015))
  console.log(new car("mercedes","a6",1999))
  console.log(new car("fiat","a7",1907))
  console.log(new car("fort","a8",2002))
  console.log(new car("smart","a9",2018))
  console.log(new car("tessla","a10",2019))
