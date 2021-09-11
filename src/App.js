import './App.css';
import './index.css'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form style={{ color: "white" }}>
        <Form.Group style={{ width: "500px" }} controlId="form-Name">
            <Form.Label>Name :</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.LastName">
            <Form.Label>Last name :</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address :</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Phone">
            <Form.Label>Phone Number :</Form.Label>
            <Form.Control type="email" placeholder="Enter your number" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment :</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message"/>
        </Form.Group>
        <Button className="mt-3" variant="danger">Submit</Button>
      </Form>
      </header>
    </div>
  );
}

export default App;
