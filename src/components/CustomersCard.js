import { useState } from 'react';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ModalConfirm from './ModalConfirm';

const CustomersCard = ({ 
  name,
  lastname,
  email,
  avatar
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const handleConfirmModal = () => {
    alert('Excluído!')
  }

  const handleDeleteCostumer = () => {
    handleToggleOpenModal();
  }

  return (
    <>
      <Card sx={{mt: 2, w: 4}}>
        <CardHeader 
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              P
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
      </Card>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorite">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleDeleteCostumer}>
          <DeleteIcon />
        </IconButton>
      </CardActions>

      <ModalConfirm 
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={handleConfirmModal}
        title="Deseja realmente excluir este cadastro?"
        message="Ao confirmar não poderá reverter essa situação"
      />
    </>
  );
}

export default CustomersCard;