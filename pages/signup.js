import Head from 'next/head';
import { useState, useEffect } from 'react'
import {Button,Form,FormGroup} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import AccountLayout from '../components/accountLayout';
import styles from '../styles/account.module.scss';
import utils from '../styles/utils.module.scss';
import Link from 'next/link'
export default function SignUp() {
    const {user,signUp} = useAuth();
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
    }
    
    return (
        <AccountLayout>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className={styles.content}>
                <svg viewBox="22.081 55.142 60 60" width="60" height="60">
                <path d="M 66.251 89.682 L 66.271 89.682 L 62.431 83.012 C 61.851 82.012 60.681 81.182 59.441 80.922 L 59.331 80.902 C 57.971 80.652 56.741 81.092 55.831 82.312 L 55.761 82.402 L 55.611 82.622 L 55.481 82.812 L 55.291 83.092 L 55.081 83.412 L 54.791 83.862 L 54.411 84.472 L 53.891 85.312 L 53.901 85.312 L 58.741 94.042 C 59.951 96.122 62.591 96.832 64.671 95.622 C 66.721 94.432 67.441 91.842 66.311 89.782 L 66.261 89.692 L 66.251 89.682 Z"></path>
                <path d="M 59.461 78.062 L 59.581 78.082 L 56.231 72.272 C 55.261 70.612 54.021 69.782 52.211 69.752 L 52.091 69.752 C 50.391 69.752 48.941 70.622 48.021 72.172 L 47.961 72.272 L 37.911 89.682 C 36.701 91.762 37.411 94.402 39.501 95.612 C 41.551 96.802 44.151 96.132 45.381 94.122 L 46.441 92.302 L 47.311 90.812 L 47.941 89.742 L 48.561 88.692 L 49.171 87.662 L 49.901 86.442 L 50.381 85.642 L 51.091 84.472 L 51.661 83.552 L 51.961 83.072 L 52.381 82.412 L 52.641 82.012 L 52.761 81.822 L 52.991 81.482 L 53.201 81.172 L 53.341 80.962 L 53.431 80.832 L 53.591 80.612 C 55.091 78.632 57.231 77.782 59.481 78.072 L 59.461 78.062 Z"></path>
                <path d="M 52.081 55.142 C 35.511 55.142 22.081 68.572 22.081 85.142 C 22.081 101.712 35.511 115.142 52.081 115.142 C 68.651 115.142 82.081 101.712 82.081 85.142 C 82.081 68.572 68.651 55.142 52.081 55.142 Z M 66.071 98.052 C 62.681 100.022 58.361 98.892 56.331 95.522 L 56.271 95.422 L 52.191 88.062 L 52.091 88.232 L 51.261 89.622 L 50.951 90.142 L 50.021 91.722 L 49.401 92.792 L 48.291 94.702 L 47.851 95.472 C 45.861 98.902 41.491 100.072 38.071 98.082 C 34.681 96.112 33.501 91.812 35.401 88.402 L 35.461 88.302 L 45.521 70.872 C 46.921 68.412 49.321 66.942 52.101 66.942 C 54.881 66.942 57.131 68.292 58.601 70.742 L 58.671 70.872 L 68.721 88.282 L 68.701 88.282 L 68.751 88.382 C 70.651 91.792 69.481 96.092 66.081 98.062 L 66.071 98.052 Z"></path>
                </svg>
                <h1 className={utils.headingXl}>Sign Up</h1>
                <Form className={styles.form} onSubmit={handleSignUp}>
                    <FormGroup controlId="formBasicEmail">
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
                    <Button type="submit" className='primary'>Sign Up</Button>
                </Form>
                <p>Already have an account? <Link href="/signin">Sign In</Link></p>
            </div>
        </AccountLayout>
    );
  }