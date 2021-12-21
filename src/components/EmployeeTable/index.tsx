import { useContext } from "react";
import { EmployeesContext } from "../../EmployeesContext";
import { Container } from "./styles";




export function EmployeeTable() {
  const { employees } = useContext(EmployeesContext)

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
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.CPF}</td>
              <td>{employee.status}</td>
              <td>{employee.job}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(employee.createdAt)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default EmployeeTable;
