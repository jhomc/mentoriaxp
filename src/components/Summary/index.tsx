import { useContext } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { EmployeesContext } from "../../EmployeesContext";

import { Container } from "./styles";

export function Summary() {
  const { employees } = useContext(EmployeesContext);

  return (
    <Container>
      <div>
        <header>
          <p>Funcionários Ativos</p>
          <p>
            <IconContext.Provider value={{ color: "#48BB78", size: "1.25rem" }}>
              <AiOutlineCheckCircle />
            </IconContext.Provider>
          </p>
        </header>
        <strong>25</strong>
      </div>

      <div>
        <header>
          <p>Funcionários Inativos</p>
          <p>
            <IconContext.Provider value={{ color: "#E53E3E", size: "1.25rem" }}>
              <AiOutlineCloseCircle />
            </IconContext.Provider>
          </p>
        </header>
        <strong>25</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total de Funcionários</p>
          <p>
            <IconContext.Provider value={{ color: "#fff", size: "1.25rem" }}>
              <BsPersonFill />
            </IconContext.Provider>
          </p>
        </header>
        <strong>50</strong>
      </div>
    </Container>
  );
}
