import React, {useEffect, useState} from 'react';
// import { useUserAuth } from '../../context/UserAuthContext';
import styles from './style.module.css';
import imgField from '../../static/Tabletlogin.svg';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftDiv}>
        <div className={styles.loginDiv}>
        <Avatar sx={{ bgcolor: red[200], cursor: 'pointer' }}>
          <AssignmentIcon />
        </Avatar>
        <Typography margin='0.6rem 0' component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component='form'
          //  onSubmit={handleSubmit} 
           mt={2} noValidate>
                <TextField 
                color='error'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                // size={size2}
                />
                <TextField 
                color='error'
                margin='normal'
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // size={size2}
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="error" />}
                label="Remember me"
                />
                 <Button
              type="submit"
              fullWidth
            //   size={size}
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'error.light',
              '&:hover':{
                backgroundColor:'error.dark'
              }
               }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link color='error' href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link color='error' href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Button
           fullWidth
           variant="outlined"
           color='warning'
        //    size={size}
        //    onClick={signinWithGoogle}
           sx={{ mt: 3, mb: 2 }}
            >Sign In With Google
          </Button>

          <Typography variant="body2" mt={2} color="text.secondary" align="center">
           {'Copyright © '}
           <Link color="inherit" href="https:/mytask.ltd">
             mytask.ltd
           </Link>{' '}
             {new Date().getFullYear()}
            {'.'}
           </Typography>
          </Box>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <img src={imgField} width='100%' alt='my login page'/>
      </div>
    </div>
  )
}

export default Login