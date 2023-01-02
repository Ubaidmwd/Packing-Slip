import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const News = () => {
    const [data, Setdata] = useState([])
    
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          
            let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9333624aa1fb4278950034f25ae3d676');
            response=await response.json();
            response=response.articles;
            
            Setdata(response);



        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])
  return (
    
     <Row xs={1} md={3} className="g-4">
      {data.map((data, i) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={data.urlToImage} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.author}
              </Card.Text>
              <Button variant="dark"><Card.Link href={data.url} style={{textDecoration:"none",color:"white"}}>Readmore</Card.Link></Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News;