import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

// import { Card } from '@material-ui/core'
import { dataReview } from './data';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {dataReview.title}
      </Typography>
      {/* <Grid container spacing={2}> */}
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Produtos
        </Typography>
        {dataReview.produtosMock.map((products) => (
          <li>{products}</li>
        ))}
      </Grid>
      <Grid item container direction="column" xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Revisão e Finalização
        </Typography>
        <Typography gutterBottom>
          <b>Nome:</b> Joel Silva
        </Typography>
        <Typography gutterBottom>
          <b>Endereço:</b> {dataReview.addressMock}
        </Typography>
        <Typography gutterBottom>
          <b>Retirada:</b> Delivery
        </Typography>
      </Grid>
    </>
  );
}
