
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewEmployeeModal: () => void;
}


export function Header({onOpenNewEmployeeModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>Mentoria EXP</h1>
        <button type="button" onClick={onOpenNewEmployeeModal}>Adicionar funcionário</button>
      </Content>
    </Container>
  );
};
