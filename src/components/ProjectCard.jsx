import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function BasicExample({projname, description, buttonText}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{projname}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;