import React, { useState } from "react";
import { Alert, ButtonGroup, Button } from "react-bootstrap";

function App() {
  const [message, setMessage] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLInputElement).value === message) {
      setMessage("");
    } else {
      setMessage((e.target as HTMLInputElement).value);
    }
  };

  return (
    <div className="container pt-4">
      <Alert variant="success">Yayy, I did it!</Alert>
      <div style={{ height: "30rem", width: "100%", position: "relative" }}>
        <div className="duotone-before" />
        <div className="duotone" />
        <div className="duotone-after" />
      </div>
      <ButtonGroup>
        <Button
          variant="outline-success"
          value="I love you"
          onClick={handleClick}
        >
          Meli
        </Button>
        <Button
          variant="outline-warning"
          onClick={handleClick}
          value="WTF are you doing here?"
        >
          Someone else
        </Button>
        <Button
          variant="outline-danger"
          onClick={handleClick}
          value="Uh oh, you broke the website :("
        >
          Mäge
        </Button>
      </ButtonGroup>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
