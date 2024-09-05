import Carousel from 'react-bootstrap/Carousel';
function Main() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src="/images/slide1.jpeg" style={{width:'100%', height:'300px'}} alt=".."/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/images/slide01.jpg" style={{width:'1520px', height:'300px'}} alt=".."/>
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/images/slide02.jpeg" style={{width:'100%', height:'300px'}} alt=".."/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;

