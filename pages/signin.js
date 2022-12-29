import { FormGroup } from '@mui/material';
import Head from 'next/head';
import { useState, useEffect } from 'react'
import {Button,Form} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function SignIn() {
    const {user,signIn} = useAuth();
    console.log(user);
    const [data, setData] = useState({email:'',password:''})
    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signIn(data.email, data.password);
            router.push('/');
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <div>
                <h1>Sign In</h1>
                <Form onSubmit={handleSignIn}>
                    <FormGroup>
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
                    <FormGroup>
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