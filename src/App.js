import React from "react";
import Modal from "../src/Components/Modal/Modal";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import AppRoutes from "./routes/AppRouters";

function App() {
  const modal = useSelector((state) => state.helpers.modal);

  return (
    <div class="m-0">
      <AppRoutes />
      {modal && <Modal Name={"Name"} Brif={"Brif"} Ganre={"Ganre"} />}
      <Footer />
    </div>
  );
}

export default App;
