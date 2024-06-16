import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";  

function ListGroup() {
  const items = ["new York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
