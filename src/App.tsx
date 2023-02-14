import React, { useState } from "react";
import { Alert, ButtonGroup, Button } from "react-bootstrap";

function App() {
  const [message, setMessage] = useState<string>("");
  const [isBroken, setIsBroken] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMessage((e.target as HTMLInputElement).value);
  };

  return (
    <>
      {isBroken && (
        <Alert variant="danger">
          <h1>Uh oh, you broke the website!</h1>
          <p>But don't worry. It's going to be okay.</p>
        </Alert>
      )}
      {!isBroken && (
        <div className="container pt-4">
          <Alert variant="success">Yayy, I did it!</Alert>
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
              onClick={() => setIsBroken(true)}
              value="Uh oh, you broke the website :("
            >
              Mäge
            </Button>
          </ButtonGroup>

          {message && <p>{message}</p>}
        </div>
      )}
    </>
  );
}

export default App;
