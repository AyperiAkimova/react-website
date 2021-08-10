import React from 'react';
import './PrihodPage.css';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
          margin: theme.spacing(5),
        width: '80ch',
        display: 'flex',

      },
    },
    
  }),
);

export default function ArticlePage() {
  const classes = useStyles();

  return (
      <>
       <div className="form-prihod"> 
         <h1> Добавить</h1>
    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Наименование" variant="outlined" />
      <TextField id="outlined-basic" label="Размерный ряд" variant="outlined" />
      <TextField id="outlined-basic" label="Тех харак" variant="outlined" />
      <TextField id="outlined-basic" label="Дата начала" variant="outlined" />
      <TextField id="outlined-basic" label="Количество" variant="outlined" />
      <TextField id="outlined-basic" label="Дата окончания" variant="outlined" />
      <TextField id="outlined-basic" label="Цена" variant="outlined" />
      <TextField id="outlined-basic" label="Контрагенты" variant="outlined" />
      
        <Button
        variant="contained" 
        color="secondary"
        // size="small"
        href="/Article"
      >
        Save
      </Button>
      
    </form>
  </div>
      </>
  );
}