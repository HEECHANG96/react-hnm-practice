import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';

const ProductDetail = () => {
  let{ id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail= async () => {
    let url = `https://my-json-server.typicode.com/HEECHANG96/react-hnm-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(()=>{
    getProductDetail();
  },[]);

  return <Container>
    <Row>
      <Col className="product-img">
        <img src={product?.img}/>
      </Col>
      <Col>
        <h3>{product?.title}</h3>
        <h4>\{product?.price}</h4>
        <h5>{product?.choice===true?"Conscious choice":""}</h5>
        <DropdownButton class="dropdown" id="dropdown-basic-button" title="사이즈 선택">
          <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
        </DropdownButton>

          <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home">추가</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </Col>
    </Row>

  </Container>
}

export default ProductDetail