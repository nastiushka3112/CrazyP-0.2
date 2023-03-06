import React from "react";
import ModalCreate from "./Components/Modal/ModalCreate/ModalCreate";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import AppRoutes from "./routes/AppRouters";
import Header from "./Components/Header/Header";
import BurgerModal from "./Components/Modal/BurgerModal";

function App() {
  const modal = useSelector((state) => state.helpers.modal);
  const burger = useSelector((state) => state.helpers.burger);

  return (
    <div class="m-0 relative">
      <Header />
      {burger && <BurgerModal />}
      <AppRoutes />
      {modal && <ModalCreate />}
      <Footer />
    </div>
  );
}

export default App;
