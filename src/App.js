import React from "react";
import Modal from "../src/Components/Modal/Modal";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import AppRoutes from "./routes/AppRouters";
import Header from "./Components/Header/Header";
import BurgerModal from "./Components/Modal/BurgerModal";

function App() {
  const modal = useSelector((state) => state.helpers.modal);
  const burger = useSelector((state) => state.helpers.burger);

  return (
    <div class="m-0">
      <Header />
      {burger && <BurgerModal />}
      <AppRoutes />
      {modal && <Modal Name={"Name"} Brif={"Brif"} Ganre={"Ganre"} />}
      <Footer />
    </div>
  );
}

export default App;
