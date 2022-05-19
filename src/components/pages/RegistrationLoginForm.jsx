import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthValue } from '../contexts/AuthContext'; 

const RegistrationLoginForm = (props) => {

  const navigate = useNavigate();
  const { userRegister, currentUser, authError, setAuthError, errorMessage, userSignIn } = AuthValue()

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false
  })

  useEffect(() => {
    if(currentUser) {
      navigate("/houses")
    }
  }, [currentUser])

  const handleRegister = () => {
    userRegister(values.email, values.password);
  }

  const handleSignIn = () => {
    userSignIn(values.email, values.password);
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleNotificationClose = () => {
      setAuthError(false);
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Snackbar 
        open={authError} 
        autoHideDuration={3000} 
        onClose={handleNotificationClose}
        anchorOrigin={{vertical:"top", horizontal:"center"}}>
        <Alert onClose={handleNotificationClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <div style={{width:"80%",display:"flex", flexDirection:"column", alignItems:"center", margin:"150px auto", border:"1px solid black", borderRadius:"7px", padding:"20px", boxShadow:25}}>
          <Typography variant='h3'>{props.title}</Typography>
          <FormControl sx={{ m: 2, width: '40ch' }} variant="outlined">
            <InputLabel htmlFor='email-form'>Email</InputLabel>
            <OutlinedInput
              id="email-form"
              value={values.email}
              onChange={handleChange('email')}
              endAdornment={<InputAdornment position="end">@</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 2, width: '40ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button 
            sx={{m: 2}}
            variant="contained" 
            color="warning" 
            onClick={() => {
              if(props.title === "Register") {
                handleRegister()
              } else {
                handleSignIn()
              }
            }}>{props.title}</Button>
      </div>
    </>
  )
}

export default RegistrationLoginForm