import { Accordion } from "react-bootstrap";

export default function KeyPointsList({ items }) {
  return (
    <Accordion>
      {items.map((item, index) => (
        <Accordion.Item eventKey={String(index)} key={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
