import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name , setName] = useState("");
  const [imgSrc , setImgSrc] = useState("");
  const [description , setDescription] = useState("");
  const [rate , setRate] = useState("");
  const [trailer , setTrailer] = useState("");

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleImgSrc = (e) => {
    setImgSrc(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleRate = (e) => {
    setRate(e.target.value)
  }
  const handleTrailer = (e) => {
    setTrailer(e.target.value)
  }
  
  const handleAdd = () => {
    let newMovie ={ name , imgSrc , description , rate , trailer}
    add(newMovie)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"transparent", marginTop:"80px", color:"white", width:"200px", borderRadius:"25px", marginBottom:"30px",left: "50%",bottom: "20px",zIndex: "999"}}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add your favourite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie name</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={(e)=> handleName(e)} value={name} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Image Url</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={(e)=> handleImgSrc(e)}  value={imgSrc}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={(e)=> handleDescription(e)} value={description} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Rate</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={(e)=> handleRate(e)}  value={rate}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Trailer</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={(e)=> handleTrailer(e)}  value={trailer}/>
            </Form.Group>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie
