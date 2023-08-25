import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";

import CustomersCard from "../../components/CustomersCard";

const List = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  console.log(customers)

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        const { data } = res.data
        setCustomers(data)
      })
  }, []);

  const handleDeleteCostumer = id => {
    axios.delete(`https://reqres.in/users/${id}`)
    .then(() => {
      const newCostumersState = customers.filter(customer => customer.id !== id);

      setCustomers(newCostumersState);
    });
  }

  const handleEditCostumer = id => {
    navigate(`/costumers/edit/{id}`);
  }

  return (
    <Grid container>
      {
        customers.map(customer => {
          return (
            <Grid item xs={12} md={4} sx={{p: 2}}>
              <CustomersCard 
                id={customer.id}
                name={customer.first_name}
                lastname={customer.last_name}
                avatar={customer.avatar}
                email={customer.email}
                onDelete={handleDeleteCostumer}
                onEdit={handleEditCostumer}
                />
            </Grid>
          )
        })
      } 
    </Grid>
  );
}

export default List;