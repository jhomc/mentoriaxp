import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import Modal from "react-modal";
import { NewEmployeeModal } from "../components/NewEmployeeModal";
import { EmployeesContext, EmployeesProvider } from "../EmployeesContext";
import { UpdateEmployeeModal } from "../components/UpdateEmployeeModal";
import { api } from "../services/api";

Modal.setAppElement("body");

interface Employee {
  id: number;
  name: string;
  CPF: string;
  status: string;
  job: string;
  birthDate: string;
  email: string;
  CEP: string;
  street: string;
  neighborhood: string;
  city: string;
  province: string;
  salary: string;
  boss: string;
  phone: string;
  addressNumber: string;
  createdAt: string;
}

const Home: NextPage = () => {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee>({} as Employee)

  function handleOpenNewEmployeeModal() {
    setIsNewEmployeeModalOpen(true);
  }

  function handleCloseNewEmployeeModal() {
    setIsNewEmployeeModalOpen(false);
  }

  function handleOpenUpdateEmployeeModal() {
    setIsUpdateEmployeeModalOpen(true);
  }


  function handleCloseUpdateEmployeeModal() {
    setIsUpdateEmployeeModalOpen(false);
  }

  return (
    <>
      <EmployeesProvider>
        <Header onOpenNewEmployeeModal={handleOpenNewEmployeeModal} />
        <Dashboard onOpenUpdateEmployeeModal={handleOpenUpdateEmployeeModal} />

        <NewEmployeeModal
          isOpen={isNewEmployeeModalOpen}
          onRequestClose={handleCloseNewEmployeeModal}
        />

        <UpdateEmployeeModal 
          isOpen={isUpdateEmployeeModalOpen}
          onRequestClose={handleCloseUpdateEmployeeModal}
        />
      </EmployeesProvider>
    </>
  );
};

export default Home;
