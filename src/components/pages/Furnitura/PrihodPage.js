import React, {useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PrihodPage.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {FormControlLabel} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '100ch',
        display: 'flex',
      },
    },
  }),
);


export default function PrihodPage() {
  const classes = useStyles();  
  const [value, setValue] = useState('prihod');

  const {register, formState: {errors}, handleSubmit} = useForm({
    criteriaMode: 'all'});
  const onSubmit = (data) => console.log(data);

  // const [name, setName] = useState('')

  // const nameChangeHandler = (e) => {
  //   setName(e.target.value)
  // }

  // const onSubmit = async () => {

  //   const form = {
  //     name: name
  //   }

  //   const response = await fetch('https://www.fsf.com/', {
  //     headers: {
  //       'Authorization': 'Token fdsfasdf',
  //     },
  //     body: JSON.stringify(form)
  //   })

  //   const data = await response.json()

  //   console.log('data: ', data)
  // }


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="form-prihod">
        <h1>Заполните данные</h1>
        
        <form className={classes.root} noValidate autoComplete="off" 
          onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-secondary"
            label="Наименование(тех.харак)"
            variant="outlined"
            color="secondary"
            name="name"
           
            {...register('name', {required: true})}
            
          />
        
          
          <TextField
            id="outlined-secondary"
            label="Код"
            variant="outlined"
            color="secondary"
            name="kod"
            {...register('kod', {
              required: 'This input is required.',
              pattern: {
                value: /\d+/,
                message: 'This input is number only.',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="kod"
            render={({messages}) => {
              console.log('messages', messages);
              return messages ?
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            )) :
            null;
            }}
          />
         
          <TextField
            id="outlined-secondary"
            label="Количество"
            variant="outlined"
            color="secondary"
            name="koli"
            {...register('koli', {required: true})}
          />
      
          <RadioGroup aria-label="prihod-rashod" 
            name="pr" value={value} onChange={handleChange}
            {...register('pr', {required: true})}>
            <FormControlLabel value="prihod" 
              control={<Radio />} label="Приход" 
            />
            <FormControlLabel value="rashod" 
              control={<Radio />} label="Расход"
            />
        
          </RadioGroup>
    
          <TextField
            id="outlined-secondary"
            label="Адрес"
            variant="outlined"
            color="secondary"
            name="address"
            {...register('address', {required: true})}
          />
          <TextField
            id="outlined-secondary"
            label="Дата"
            variant="outlined"
            color="secondary"
            name="data"
            {...register('data', {required: true})}
          />
     
          <TextField
            id="outlined-secondary"
            label="ед.изм"
            variant="outlined"
            color="secondary"
            name="edizm"
            {...register('edizm', {required: true})}
          />
          <TextField
            id="outlined-secondary"
            label="Цена"
            variant="outlined"
            color="secondary"
            name="price"
            {...register('price', {required: true})}
          />
          <TextField
            id="outlined-secondary"
            label="Артикул"
            variant="outlined"
            color="secondary"
            name="article"
            {...register('article', {required: true})}
          />
          <Button variant="contained" 
            color="secondary" 
            size="large" 
           
            type="submit">
  Сохранить
          </Button>
        </form>
      </div>
    </>
  );
}

