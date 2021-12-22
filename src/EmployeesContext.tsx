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
  createdAt: string;
}

type EmployeeInput = Omit<Employee, 'id'| 'createdAt' >

interface EmployeeProviderProps {
  children: ReactNode;
}

interface EmployeeContextData {
  employees: Employee[];
  createEmployee: (employee: EmployeeInput) => Promise<void>;
}

export const EmployeesContext = createContext<EmployeeContextData>(
  {} as EmployeeContextData
);

export function EmployeesProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    api.get("/employees").then((response) => setEmployees(response.data.employees));
  }, []);

 async function createEmployee(employeeInput: EmployeeInput) {
    const response = await api.post('employees', {
      ...employeeInput,
      createdAt: new Date()
    })
    const { employee } = response.data

    setEmployees([
      ...employees,
      employee,
    ])
  }

  return(
    <EmployeesContext.Provider value={{employees, createEmployee}}>
      {children}
    </EmployeesContext.Provider>
  );
}