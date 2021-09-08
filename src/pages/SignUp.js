import React from 'react';
import {useForm} from 'react-hook-form';
import './SignUp.css';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      marginLeft: '750px',
      width: '25ch',
      display: 'block',
   
    },
  },
}));
export default function SignUp() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const classes = useStyles();
  
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} 
      className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label="Атыныз"
        variant="outlined"
        color="secondary"
        type="text" 
        placeholder="Атыныз" {...register('First name', 
            {required: true, maxLength: 80})}
      />
      <TextField
        id="outlined-secondary"
        label="Фамилияныз"
        variant="outlined"
        color="secondary"
        type="text" 
        placeholder="Фамилияныз" {...register('Last name', 
            {required: true, maxLength: 80})}
      />
      <TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        color="secondary"
        type="text" 
        placeholder="Email" {...register('Email', 
            {required: true, pattern: /^\S+@\S+$/i})}
      />
      <TextField
        id="outlined-secondary"
        label="password"
        variant="outlined"
        color="secondary"
        type="password"
        placeholder="Пароль" {...register('password', {min: 5})}
      />
       
      <Select {...register('Title', {required: true})}
        id="outlined-secondary"
        label="Title"
        variant="outlined"
        color="secondary">
        <option value="" />
        <option value="eto">ЭТО</option>
        <option value="furnitura">Фупнитура</option>
        <option value="sklad">Склад</option>
        <option value="hr">HR</option>
      </Select>

      {/* <input {...register('Developer', 
          {required: true})} type="radio" value="Yes" />
      <input {...register('Developer', 
          {required: true})} type="radio" value="No" /> */}

      <input type="submit" value="Жонотуу"/>
    </form>
    
  );
}
