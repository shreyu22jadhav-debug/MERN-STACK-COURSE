import 'bootstrap/dist/css/bootstrap.min.css';
//Importing Table component form react-bootstap to display data in tabuar format
import Table from 'react-bootstrap/Table';
//Importing Button component form react-bootstap to craete clickable button 
import Button from 'react-bootstrap/Button';
//Importing clo component form react-bootstarp for column layout inside form rows
import Col from 'react-bootstrap/Col';
//Importing form component form react-bpptstarp to build the input form
import Form from 'react-bootstrap/Form';
//Importing row component form react-bootstarp to create horizontal row inside form
import Row from 'react-bootstrap/Row';
//Importing Toastcontainer and toast form react-toastify to show success/error notification
import { ToastContainer, toast } from 'react-toastify';
//improting axios libary to maje HTTP API calls (POST. DELETE)
import axios from "axios";
//Importing custom CSS file for additional styling
import "./../style.css";
//Importing useEffect and useState hook form React
import { useState, useEffect } from 'react';
//Importing model component form react-bootsrap to show data confirmation popup 
import Modal from 'react-bootstrap/Modal';



function Items() {
    // usestate - hook we can store vlaue in usestate and that we can update
    // useEffect - side effect perform each page lod it will be call useEffect
    // useMoemo
    // useCallblack
    // useRef



    //state to store the item name entered by user
    const [itemName, setItemName] = useState() //1 use state hook

    //state to store the description name entered by user
    const [description, setDescription] = useState()


    //state to store the purchasePrice name entered by user 
    const [purchasePrice, setPurchasePrice] = useState()

    //state to store the sellingPrice name entered by user 
    const [sellingPrice, setSellingPrice] = useState()

    //state to store the quantity  name entered by user
    const [quantity, setQuantity] = useState()

    //state to store the unit  name entered by user
    const [unit, setUnit] = useState()

    //state to store the item name entered by user
    const [itemData, setData] = useState()

    //Async function to handle from submission and send data to the backend API
    async function SubmitForm(e) {
        try {

            // Prevent the default form submission behavior
            e.preventDefault();
            //create an object with all form field value to send to the API
            const data = {
                //mpping itemname state to 'name' field
                name: itemName,
                //mpping description state to 'description' field
                decription: description,
                //mpping sellingPrice state to 'sellingPrice' field
                sellingPrice: sellingPrice,
                //mpping purchasePrice state to 'purchasePrice' field
                purchasePrice: purchasePrice,
                //mpping quantity state to 'quantity' field
                quantity: quantity,
                //mpping unit state to 'unit' field
                unit: unit
            };

            //Logging the form data to the console for dubugging
            console.log(data, "form submitted");
            // Sending a POST request to the backend API to create new item
            const apiResponse = await axios.post(
                `${import.meta.env.VITE_API_URL_BACKEND}/create-item`,
                data
            )
                // Logging success message when request is successful
                .then(console.group("yes")).catch((error) => console

                    .log(error))

            // // Logging error if the request failas
            console.log(apiResponse)
            // calling getAllitemsData to ref the item list after creating a new item
            getAllItemsData();
            // showing a succsee toast notification after form is sumited successfuly
            toast.success("Form submitted", {
                // seting toast position to top-right  corner
                position: "top-right",
                //Y
                autoClose: 5000,

                hideProgressBar: false,

                closeOnClick: false,

                pauseOnHover: true,

                draggable: true,

                progress: undefined,

                theme: "light",
            });

        } catch (error) {

            console.log(error)
        }

    }



    const getAllItemsData = async () => {
        try {


            const apiResponse = await fetch(`${import.meta.env.VITE_API_URL_BACKEND}/get-all-item`)

            const responseData = await apiResponse.json()

            setData(responseData.data)


            console.log(responseData)


        } catch (error) {

            console.log(error)

        }
    };


    useEffect(() => {

        getAllItemsData();
    }, []);


    console.log(
        itemData, "itemData ==>"
    )

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [id, setId] = useState()


    const openDeleteModle = (id) => {
        try {

            setShow(true);

            setId(id)

            console.log(id, "id==>")

            console.log("call delete function")
        } catch (error) {

            console.log(error)
        }
    }


    const handleDelete = async () => {
        try {

            console.log(-id, "_id==>");

            const apiResponse = await axios.delete(`${import.meta.env.VITE_API_URL_BACKEND}/delete-item/${id}`)

            setShow(false)

            console.log(apiResponse)

            getAllItemsData();

        } catch (error) {

            console.log(error)
        }
    };

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

            <h1 className='text-danger text-center my-5'> <b>Manage Items</b> </h1>

            <div className='container'>


                <div className='row'>

                    <div className='col-md-6'>

                        <h3 className='border text-center'>Create Item</h3>

                        <Form className='my-5'>

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

                                    <Form.Label>Description</Form.Label>

                                    <Form.Control type="text" placholer="Enter description"
                                        onChange={(event) => setDescription(event.target.value)}
                                        value={description}
                                    />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridPassword">

                                    <Form.Label>Purchase Price</Form.Label>

                                    <Form.Control type="Number" placeholder="Enter Purchase Price"
                                        onChange={(event) => setPurchasePrice(event.target.value)}
                                        value={purchasePrice}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress1">

                                    <Form.Label>Selling Price</Form.Label>
                                    <Form.Control type="Number" placeholder="Enter Selling Price"
                                        onChange={(event) => setSellingPrice(event.target.value)}
                                        value={sellingPrice}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridCity">

                                    <Form.Label>Quantity</Form.Label>

                                    <Form.Control type="Number" placholder="Enter Quantity"
                                        onChange={(event) => setQuantity(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Label>Unit</Form.Label>

                                    <Form.Select defaultValue="Choose Unit" value={unit}
                                        onChange={(event) => setUnit(event.target.value)}
                                    >


                                        <option>Choose Unit</option>

                                        <option>piecs</option>

                                        <option>Box</option>

                                        <option>Kg</option>

                                        <option>gm</option>

                                        <option>ltr</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <div className='text-center'>

                                <Button variant="primary"
                                    type="submit"
                                    className='w-50'
                                    onClick={SubmitForm}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>

                    <div className='col-md-6'>

                        <h3 className='border text-center'>Get Item</h3>


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

                                {

                                    itemData &&
                                    itemData.map((each, index) => {
                                        return (

                                            <tr key={index + 0}>


                                                <td>{index + 1}</td>

                                                <td>{each.name}</td>

                                                <td>{each.decription}</td>

                                                <td>{each.purchasePrice}</td>

                                                <td>{each.sellingPrice}</td>

                                                <td>{each.quantity}</td>

                                                <td>{each.unit}</td>

                                                <td className='d-flex'>

                                                    <button className='btn btn-success'>Edit</button>

                                                    <button className='btn btn-danger mx-2'

                                                        onClick={() => openDeleteModle(each._id)}
                                                    >

                                                        Delete
                                                    </button>
                                                </td>

                                            </tr>

                                        );
                                    }
                                    )}




                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you aure wan to delete this Item</Modal.Body>
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
    )
}

export default Items