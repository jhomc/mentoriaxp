import type { NextPage } from "next";
import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import Modal from "react-modal";
import { NewEmployeeModal } from "../components/NewEmployeeModal";
import { EmployeesContext, EmployeesProvider } from "../EmployeesContext";

Modal.setAppElement("body");

const Home: NextPage = () => {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);

  function handleOpenNewEmployeeModal() {
    setIsNewEmployeeModalOpen(true);
  }

  function handleCloseNewEmployeeModal() {
    setIsNewEmployeeModalOpen(false);
  }

  return (
    <>
      <EmployeesProvider>
        <Header onOpenNewEmployeeModal={handleOpenNewEmployeeModal} />
        <Dashboard />

        <NewEmployeeModal
          isOpen={isNewEmployeeModalOpen}
          onRequestClose={handleCloseNewEmployeeModal}
        />
      </EmployeesProvider>
    </>
  );
};

export default Home;
