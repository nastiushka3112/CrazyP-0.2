import React from "react";
import Main from "./Pages/Main/Main";
import Modal from "../src/Components/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const modal = useSelector((state) => state.helpers.modal);

  return (
    <div class="m-0">
      <Main />
      {modal && <Modal Name={"Name"} Brif={"Brif"} Ganre={"Ganre"} />}
    </div>
  );
}

export default App;
