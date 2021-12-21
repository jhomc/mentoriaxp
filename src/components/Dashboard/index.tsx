import EmployeeTable from '../EmployeeTable';
import { Summary } from '../Summary';
import { Container } from './styles';


export function Dashboard() {
  return (
    <Container>
      <Summary />
      <EmployeeTable />
    </Container>
  );
};