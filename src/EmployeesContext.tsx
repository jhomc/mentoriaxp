import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

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

interface EmployeeInput {
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
}

interface EmployeeProviderProps {
  children: ReactNode;
}

interface EmployeeContextData {
  employees: Employee[];
  createEmployee: (employee: EmployeeInput) => Promise<void>;
  deleteEmployee: (id: Number) => Promise<void>;
  handleUpdateEmployee: (employee: EmployeeInput) => Promise<void>;
}

export const EmployeesContext = createContext<EmployeeContextData>(
  {} as EmployeeContextData
);

export function EmployeesProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editEmployee, setEditEmployee] = useState<Employee>({} as Employee);
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] =
    useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/employees");
      setEmployees(data.employees);
    })();
  }, []);

  async function createEmployee(employeeInput: EmployeeInput) {
    const response = await api.post("employees", {
      ...employeeInput,
      createdAt: new Date(),
    });
    const { employee } = response.data;

    setEmployees([...employees, employee]);
  }

  async function handleUpdateEmployee(
    employeeInput: EmployeeInput
  ): Promise<void> {
    try {
      const employeeUpdated = await api.put(`employees/${editEmployee.id}`, {
        ...editEmployee,
        ...employeeInput,
      });

      const employeesUpdated = employees.map((e) => {
        e.id !== employeeUpdated.data.id;
      });

      setEmployees(employeesUpdated as any);
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenUpdateEmployeeModal(employee: Employee) {
    setEditEmployee(employee);
    setIsUpdateEmployeeModalOpen(true);
  }

  function setEditingEmployee() {
    const editingEmployee = employees.find((e) => e.id === editEmployee.id);

    setIsUpdateEmployeeModalOpen(true);
    return editingEmployee;
  }

  async function deleteEmployee(id: Number) {
    try {
      await api.delete(`/employees/${id}`);

      setEmployees(employees.filter((e) => e.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        createEmployee,
        deleteEmployee,
        handleUpdateEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
