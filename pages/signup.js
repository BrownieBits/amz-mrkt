import { FormGroup } from '@mui/material';
import Head from 'next/head';
import { useState, useEffect } from 'react'
import {Button,Form} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function SignUp() {
    const {user,signUp} = useAuth();
    console.log('USER', user)
    const [data, setData] = useState({email:'',password:''})
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp(data.email, data.password);
            router.push('/');
        } catch(err) {
            console.log(err);
        }
        console.log(data);
    }
    
    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSignUp}>
                    <FormGroup controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => setData({
                            ...data,
                            email:e.target.value
                        })}
                        value={data.email}
                        required
                        type="email"
                        placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setData({
                            ...data,
                            password:e.target.value
                        })}
                        value={data.password}
                        required
                        type="password"
                        placeholder="Password"
                        />
                    </FormGroup>
                    <Button type="submit" className='primary'>Sign In</Button>
                </Form>
            </div>
        </>
    );
  }