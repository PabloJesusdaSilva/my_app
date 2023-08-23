import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const CustomersCard = ({ 
  name,
  lastname,
  email,
  avatar
}) => {
  return (
    <>
      <Card sx={{mt: 2}}>
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
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </>
  );
}

export default CustomersCard;