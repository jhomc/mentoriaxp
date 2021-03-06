import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ButtonContainer, Container, SimpleGrid } from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FormEvent, useContext, useState } from "react";
import { EmployeesContext } from "../../EmployeesContext";


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


interface UpdateEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UpdateEmployeeModal({
  isOpen,
  onRequestClose,
}: UpdateEmployeeModalProps) {
  const { employees, handleUpdateEmployee } = useContext(EmployeesContext);

  

  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [CEP, setCEP] = useState('');
  const [street, setStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [job, setJob] = useState('');
  const [salary, setSalary] = useState('');
  const [boss, setBoss] = useState('');



  async function handleEmployeeUpdate(event: FormEvent) {
    event.preventDefault();

    await handleUpdateEmployee({
      name,
      job,
      status,
      CPF,
      birthDate,
      email,
      CEP,
      street,
      neighborhood,
      city,
      province,
      salary,
      boss,
      phone,
      addressNumber,
    });

    setName('');
    setCPF('');
    setBirthDate('');
    setAddressNumber('');
    setEmail('');
    setPhone('');
    setStatus('');
    setCEP('');
    setStreet('');
    setAddressNumber('');
    setNeighborhood('');
    setCity('');
    setProvince('');
    setBoss('');
    setSalary('');
    setJob('');

    onRequestClose();
  }

  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleEmployeeUpdate}>
        <h2>Cadastrar Funcion??rio</h2>
        <button type="button" onClick={onRequestClose} className="close-modal">
          <IconContext.Provider
            value={{ size: "1.5rem", color: "var(--text-body)" }}
          >
            <RiCloseLine />
          </IconContext.Provider>
        </button>

        <SimpleGrid className="personal">
          <input
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="CPF"
            type="text"
            value={CPF}
            onChange={(event) => setCPF(event.target.value)}
          />
          <input
            placeholder="Data de nascimento"
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Telefone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
            placeholder="Status"
            type="select"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </SimpleGrid>

        <SimpleGrid className="address">
          <input
            placeholder="CEP"
            type="text"
            value={CEP}
            onChange={(event) => setCEP(event.target.value)}
          />
          <input
            placeholder="Rua"
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
          <input
            placeholder="N??mero"
            type="text"
            value={addressNumber}
            onChange={(event) => setAddressNumber(event.target.value)}
          />
          <input
            placeholder="Bairro"
            type="text"
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
          />
          <input
            placeholder="Cidade"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            placeholder="UF"
            type="text"
            value={province}
            onChange={(event) => setProvince(event.target.value)}
          />
        </SimpleGrid>

        <SimpleGrid className="jobinfo">
          <input
            placeholder="Cargo"
            type="text"
            value={job}
            onChange={(event) => setJob(event.target.value)}
          />
          <input
            placeholder="Sal??rio"
            type="number"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
          <input
            placeholder="Superior respons??vel"
            type="text"
            value={boss}
            onChange={(event) => setBoss(event.target.value)}
          />
        </SimpleGrid>

        <ButtonContainer>
          <button className="save">Salvar</button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
}
