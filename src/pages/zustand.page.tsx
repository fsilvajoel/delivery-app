// import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { setHomeStore, useHomeStore } from '~hooks/UseHomeStore';

const useStyles = makeStyles({
  root: {
    height: 350,
    maxWidth: 350,
  },
});

export default function ZustandCard() {
  const count = useHomeStore((state) => state.itens);
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Voce clicou {count} vezes
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            color="primary"
            onClick={() => setHomeStore(count + 1)}
          >
            +1
          </Button>
          <Button
            size="large"
            color="secondary"
            onClick={() => setHomeStore(count - 1)}
          >
            -1
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
