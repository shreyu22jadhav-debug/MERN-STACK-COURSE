import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
import { useEffect, useState } from 'react';

function App() {
  const [itemName, SetitemName] = useState() //use state hook 

  const [itemdata, setdata] = useState()

  console.log(itemName, "item name value ")

  const handleOnChange = (event) => {
    SetitemName(event.target.value)

    console.log("typing on input field")
  };

  function submitform() {

    e.preventDefault();
    console.log("form submitted");
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }

  const getallitemsdata = async () => {
    try {
      const apiResponse = await fetch("http://localhost:9090/api/get-all-item");
      const responsedata = await apiResponse.json();
      setdata(responsedata.data);

      console.log(responsedata);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getallitemsdata();
  }, []);


  console.log(
    itemdata, "itemdata==>"
  )

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
      <div>
        <h2 className='text-danger text-center my-5'>CRUDE -MERN STACK START</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h3 className='border text-center'>Create ltems</h3>
              <Form className='my-5'>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Item name </Form.Label>
                    <Form.Control type="text" placeholder="Enter item name"
                      onChange={() => handleOnChange(Event)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Discription</Form.Label>
                    <Form.Control type="text" placeholder='Enter description' />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>pruchase price</Form.Label>
                    <Form.Control type="number" placeholder="Enter purchase price" />
                  </Form.Group>
                  <Form.Group controlId="formGridAddress">
                    <Form.Label >selling price</Form.Label>
                    <Form.Control type="number" placeholder="Enter selling price" />
                  </Form.Group>
                </Row>
                <Form.Group controlId="formGridAddress2">
                  <Form.Label as={Col}>Quantity</Form.Label>
                  <Form.Control type="number" placeholder="Enter quantity" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit">
                    <option>Choose..Unit</option>
                    <option>piue</option>
                    <option>box</option>
                    <option>kg</option>
                    <option>Gram</option>
                    <option>Litter</option>
                  </Form.Select>
                </Form.Group>
                <div className='text-center'>
                  <Button variant="primary" type="submit" className='w-50'>
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
            <div className='col-md-6'>
              <h3 className='border text-center'>Get items</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item name</th>
                    <th>Description</th>
                    <th>pruchase price</th>
                    <th>selling price</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {itemdata &&
                    itemdata.map((each, index) => {
                      return (
                        < tr >
                          <td>{index + 1}</td>
                          <td>{each.name}</td>
                          <td>{each.description}</td>
                          <td>{each.purchasePrice}</td>
                          <td>{each.sellingPrice}</td>
                          <td>{each.quantity}</td>
                          <td>{each.unit}</td>
                          <td className='d-flex'>
                            <button className='btn btn-success'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>
                      )
                    }
                    )}
              </tbody>
              </Table>

            </div>
          </div>
        </div>
      </div >


    </>
  );

}
  export default App
