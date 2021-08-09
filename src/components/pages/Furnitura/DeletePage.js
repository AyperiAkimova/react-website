import React from 'react';
import { createStyles, makeStyles, theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
          margin: theme.spacing(5),
        marginLeft: theme.spacing(50),
        width: '100ch',
        display: 'flex',
      },
    },
  }),
);

export default function DeletePage() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
       <h1> Расход</h1>
      <TextField id="standard-basic" label="Артикул" />
      <TextField id="outlined-basic" label="id" variant="outlined" />
      <TextField id="outlined-basic" label="Код" variant="outlined" />
      
      <Button
        variant="outlined" 
        color="secondary"
        size="large"
        className={classes.button}
        // startIcon={<Prihod />}
        href="/Prihod"
      >
        Delete
      </Button>
    </form>
  );
}