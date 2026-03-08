import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Detailscard } from './assets/components/DetailsCard';

function App() {
  //javascript
  console.log("swamiiiiii");

  //variable
  //Declaration
  const name = "HOC"//we cannot change const value
  let age = 20 // we can change let value. //its block scop 
  var city = "karad" // we can redeclare and reassing value. //global

  console.log(name, "name===>");
  console.log(age, "----");

  // string 
  // in double quotation ""
  const a = "shreya"
  console.log(a,);

  //array 
  //in square bracket[]
  const b = ["apple", "pineapple", "Grapes"];

  //object
  //in curly braces{}with key &their value
  const data = {
    name: "HOC",
    city: "karad",
  };
  // if-else- ternari operator
  const fullName = "HOC"
  if (fullName == "HOC") {
    console.log(true);
  } else {
    console.log(false);
  }
  //function 
  function addnumber() {
    console.log("click");
  }
  //array of object-we write an objects in array 
  const cardData = [
    {
      CardTitle: "Text 1",
      CaretPosition: "text Description 1",
    },
    {
      CardTitle: "Text 1",
      CaretPosition: "text Description 1",
    },
    {
      CardTitle: "Text 1",
      CaretPosition: "text Description 1",
    },
    {
      CardTitle: "Text 1",
      CaretPosition: "text Description 1",
    },
  ]
  console.log(cardData, "=======")
  return (
    <>
      <button className="btn btn-primary" onClick={addnumber}>Click me</button>
      <div className="container ">
        <div className="row my-2">
          <div className="col-md-3 my-2">
            {/* { CardTitle-props || cardDescription-props || we can add props also} */}
            {
              cardData.map((each) =>
                <Detailscard CardTitle={each.cardTitle} cardDescription={each.cardDescription}/>

              )
            }

          </div>
        </div>
      </div>




    </>
  )
}
export default App
