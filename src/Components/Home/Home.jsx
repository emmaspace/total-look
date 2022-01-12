import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PromoCat from "./PromoCat";
import OrderModal from "./OrderModal";

export const Home = () => {
  const [modal, setModal] = useState(false);
  return (
    <section>
      <Header modal={modal} setModal={setModal} />
      <PromoCat />
      <Footer />
      {modal ? <OrderModal setModal={setModal} /> : null}
    </section>
  );
};

export default Home;
