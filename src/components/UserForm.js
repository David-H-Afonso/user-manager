import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";


const UserForm = ({submit}) => {

  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formulario)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Nombre"
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Apellidos"
        label="Apellidos"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
      />
      <Input
        placeholder="Correo"
        label="Correo electrónico"
        name="email"
        value={formulario.email}
        onChange={handleChange}
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
