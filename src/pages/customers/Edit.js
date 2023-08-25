import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  Container,
  TextField,
  Button,
} from "@mui/material";

import Toasty from "../../components/Toasty";

const Edit = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    job: {
      value: "",
      error: false,
    }
  });

  const [openToasty, setOpenToasty] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(`https://reqres.in/users/${id}`)
      .then(res => {
        const { data } = res.data

        setForm({
          name: {
            value: data.first_name,
            error: false,
          },
          job: {
            value: data.job,
            error: false,
          }
        })
      })
  }, )

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
    setIsLoading(true)

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

    axios.put(`https://reqres.in/api/users${id}`, {
      name: form.name.value,
      job: form.job.value
    })
      .then(res => {
        setOpenToasty(true);
        setIsLoading(false);
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
        <Button variant="contained" onClick={handleRegisterButton} sx={{ m: 2 }}>
          {
            isLoading ? "Aguarde..." : "Salvar"
          }
        </Button>
      </div>

      <Toasty 
        open={openToasty} 
        severity="sucess" 
        message="Alterção concluída com sucesso!"
        onClose={() => {setOpenToasty(false)}}/>
    </Container>
  );
}

export default Edit;