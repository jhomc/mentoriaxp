import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { EmployeesContext } from "../../EmployeesContext";
import { Container } from "./styles";


interface EmployeeTableProps {
  onOpenUpdateEmployeeModal: () => void;
  
}

export function EmployeeTable({onOpenUpdateEmployeeModal}: EmployeeTableProps) {
  const { employees, deleteEmployee} = useContext(EmployeesContext);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Status</th>
            <th>Cargo</th>
            <th>Data de início</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.CPF}</td>
              <td>{employee.status}</td>
              <td>{employee.job}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(employee.createdAt)
                )}
              </td>
              <td>
                <div>
                  <button onClick={() => deleteEmployee(employee.id)}>
                    <IconContext.Provider
                      value={{ color: "var(--text-body)", size: "1.25rem" }}
                    >
                      <AiFillDelete />
                    </IconContext.Provider>
                  </button>
                  <button onClick={ 
                    onOpenUpdateEmployeeModal
                  }>
                    <IconContext.Provider
                      value={{ color: "var(--text-body)", size: "1.25rem" }}
                    >
                      <AiFillEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
