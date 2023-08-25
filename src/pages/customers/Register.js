import { useState } from "react";
import axios from "axios";

import {
  Container,
  TextField,
  Button,
} from "@mui/material";

const Register = () => {
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  });


  const handeInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      }
    });
  }

  const handleRegisterButton = () => {
    let hasError = false;

    let newFormState = {
      ...form,
    }

    if(!form.name.value) {
      hasError = true;

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: "Digite o campo nome corretamente!"
      } 
    }
    if(!form.job.value) {
      hasError = true;

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: "Digite o campo nome corretamente!"
      }
    }

    if (hasError) {
      return setForm(newFormState);
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value
    })
  }

  return (
    <Container sx={{ m: 2 }}>
      <div>
        <TextField 
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ""}
          label="Digite o seu nome" 
          variant="outlined" sx={{ m: 2 }} 
          name="name" value={form.name.value} 
          onChange={handeInputChange} />
      </div>
      <div>
        <TextField 
          error={form.job.error}
          helperText={form.job.error ? form.job.helperText : ""}
          label="Digite o seu cargo" 
          variant="outlined" sx={{ m: 2 }} 
          name="job" value={form.job.value} 
          onChange={handeInputChange} />
      </div>
      <div>
        <Button variant="contained" onClick={handleRegisterButton} sx={{ m: 2 }}>Cadastrar</Button>
      </div>
    </Container>
  );
}

export default Register;