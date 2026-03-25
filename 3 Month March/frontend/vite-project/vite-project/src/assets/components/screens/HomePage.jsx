//importing bootstrap and react-bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
//importing table component from react-bootstrap to display data in tabular form
import Table from "react-bootstrap/Table";
// importing button copmnent from react-bootstrap to create clickable button
import Button from "react-bootstrap/Button";
// importing col component from react-booststrap for column layout inside form rows 
import Col from "react-bootstrap/Col";
//importiong fr
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./../style.css";
import { useEffect, useState } from "react";//hook

import Modal from 'react-bootstrap/Modal';

//usestate -hook ,we can store vluew in usestate and that we can update 
function HomePage() {
  const [itemName, setItemName] = useState(); // 1 Use State Hook
  const [discription, setDiscription] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [itemData, setData] = useState();
// async function to handle form submission and send data to the backend API
  async function SubmitForm(e) {
    // erroe show
    try {
      // preventing  the default form submission behavion (page reload)
      e.preventDefault();
  
      // creating an object with all form field values to send to the API
      const data = {
        // mapping itemname state to 'name' field 
        name: itemName,
        //mapping discription state to'discrition' field 
        decription: discription,
        //mapping discription state to'sellingprice' field 
        sellingPrice: sellingPrice,
        //mapping discription state to'purchaseprice' field 
        purchasePrice: purchasePrice,
        //mapping discription state to'quantity' field 
        quantity: quantity,
        //mapping discription state to 'unit' field 
        unit: unit,
      };
// logging the form data to the console for debugging 
      console.log(data, "form submitted");
// sending a  POST request to the backend AIP to create a new item 
      const apiResponse = await axios
        .post("http://localhost:9090/api/create-item", data)
        //logging success message when request is successful
        .then((response) => {
          console.log("yes", response);
        })
        // logging error if the request fails
        .catch((error) => console.log(error));

        // logging the full API response to the console to the console 
      console.log(apiResponse);
      // calling getallitemsdata to refresh the item list after creating a new item 
      getAllItemsData();
      // showing a success toast notification after form is submitted successfully 
      toast.success("Form submitted", {
        // setting toast position to top-right corner 
        position: "top-right",
        //toast will  auto close after 5000milliseconds (5seconds)
        autoClose: 5000,
        //showing the progress bar inside the toast 
        hideProgressBar: false,
        // disabling close on click behavior 
        closeOnClick: false,
        //toast will pause when user hovers over it 
        pauseOnHover: true,
        //allowing the toast to be draggable  
        draggable: true,
        //no custom progress values, using default 
        progress: undefined,
        //setting the toast theme to light 
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  }

  const getAllItemsData = async () => {
    try {
      // api integration -fetch function 
      //calling the get all item api to fetch all item from the backend 
      const apiResponse = await fetch("http://localhost:9090/api/get-all-item");

      const responseData = await apiResponse.json();
      setData(responseData.data);

      console.log(responseData);
    } catch (error) {
      // logging any error that occurs while fetching item data from the api 
      console.log(error);
    }
  };
// useeffect runs once when the component mounts (empty dependeny array)
  useEffect(() => {
    //calling fetallitem to load all item when the page frist loads
    getAllItemsData();
  }, []);

  console.log(itemData, "itemData ==>");

  const [show, setShow] = useState(false);
  const [_id, setId] = useState()

// function to close the delete confirmation modal by setting show state to false  
  const handleClose = () => setShow(false);
// function to open the delete confirmation modal and store the selected items id
  const openDeleteModel = (_id) => {
    try {
      setShow(true);
      setId(_id)


      console.log(_id, "_id==>")
      console.log("call delete function")
    } catch (error) {
      console.log(error)
    }
  }


  const handleDelete = async () => {
    try {
      console.log(_id, "_id==>");
      const apiResponse = await axios.delete(`http://localhost:9090/api/delete-item/${_id}`)
      setShow(false)
      console.log(apiResponse)

        getAllItemsData()
  

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h2 className="text-danger text-center my-5">
        CRUD - MERN Stack Project start
        CRUD
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="border text-center">Create Item</h3>

            <Form className="my-5">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Item Name"
                    onChange={(event) => setItemName(event.target.value)}
                    value={itemName}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Discription</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Discription"
                    onChange={(event) => setDiscription(event.target.value)}
                    value={discription}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Purchase Price"
                    value={purchasePrice}
                    onChange={(event) => setPurchasePrice(event.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Selling price"
                    value={sellingPrice}
                    onChange={(event) => setSellingPrice(event.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Quantity"
                    onChange={(event) => setQuantity(event.target.value)}
                    value={quantity}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select
                    defaultValue="Choose Unit"
                    value={unit}
                    onChange={(event) => setUnit(event.target.value)}
                  >
                    <option>Choose Unit</option>
                    <option>Pice</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>Gram</option>
                    <option>Litter</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-50"
                  onClick={SubmitForm}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>

          <div className="col-md-6">
            <h3 className="border text-center">Get Items</h3>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {itemData &&
                  itemData.map((each, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{each.name}</td>
                        <td>{each.decription}</td>
                        <td>{each.purchasePrice}</td>
                        <td>{each.sellingPrice}</td>
                        <td>{each.quantity}</td>
                        <td>{each.unit}</td>
                        <td className="d-flex">
                          <button className="btn btn-success"> Edit </button>
                          <button className="btn btn-danger mx-2"

                            onClick={() => openDeleteModel(each._id)}

                          >

                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure wan to delete this Item</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomePage;