'use client';
import styles from './login.module.scss';
import React from "react";
import {PiXLogoBold} from "react-icons/pi";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from '@/lib/firebaseConfig';
import Link from "next/link";
import Toast from '@/components/Toast';
import { fixIcon} from "@/utils/fixIcon";

 const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [showToast, setShowToast] = useState<boolean>(false);
    const router = useRouter();
    const XLogoBold = fixIcon(PiXLogoBold);
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        try{
            await signInWithEmailAndPassword(auth,email, password);
            setShowToast(true);
            router.push('/');
        }catch(error){
            setError("Failed to login");
        }
    }
    // @ts-ignore
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <XLogoBold className={`${styles.icon} ${styles.logo}`}/>
                <h1 className={styles.header}>Sign in to X</h1>
                {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleLogin} className={styles.form}>
                <input
                    type="email"
                    placeholder="Phone, email address, or username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className={styles.input}
                    />
                <button
                    type ="submit"
                    className={styles.button}
                    disabled={!email || !password}
                >
                    Next
                </button>
            </form>
            <Link href="#forgotPassword" className={styles.forgotPassword}>Forgot password?</Link>
            <div className={styles.signupLink}>Dont have an account? <Link href="/signup">Sign up</Link></div>
            </div>
            {showToast && (
                <Toast
                    message="Successfully signed in"
                    onClose={() => setShowToast(false)}
                    />
            )}
        </div>
    )
}

export default LoginPage;