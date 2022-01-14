import { useContext } from 'react';
import { EmployeesContext } from '../../EmployeesContext';
import { EmployeeTable} from '../EmployeeTable';
import { Summary } from '../Summary';
import { Container } from './styles';

interface DashboardProps {
  onOpenUpdateEmployeeModal: () => void;
  
}

export function Dashboard({onOpenUpdateEmployeeModal}: DashboardProps ) {
  const {employees} = useContext(EmployeesContext);

  return (
    <Container>
      <Summary />
      <EmployeeTable onOpenUpdateEmployeeModal={onOpenUpdateEmployeeModal}/>
    </Container>
  );
};