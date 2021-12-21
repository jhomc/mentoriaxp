import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";




interface Employee {
  id: number;
  name: string;
  CPF: string;
  status: string;
  job: string;
  createdAt: string;
}

type EmployeeInput = Omit<Employee, 'id'| 'createdAt' >

interface EmployeeProviderProps {
  children: ReactNode;
}

interface EmployeeContextData {
  employees: Employee[];
  createEmployee: (employee: EmployeeInput) => void;
}

export const EmployeesContext = createContext<EmployeeContextData>(
  {} as EmployeeContextData
);

export function EmployeesProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    api.get("/employees").then((response) => setEmployees(response.data.employees));
  }, []);

  function createEmployee(employee: EmployeeInput) {
    api.post('employees', employee)
  }

  return(
    <EmployeesContext.Provider value={{employees, createEmployee}}>
      {children}
    </EmployeesContext.Provider>
  );
}