import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import StorefrontIcon from "@mui/icons-material/Storefront";
import { auth } from "../../data/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import "../login/Login.css";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    
    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
    
        if (user) {
          console.log("Good");
         
        }
      } catch (error) {
        navigate("");
      }
    };
    
    const register = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
    
        if (user) {
          navigate("");
        }
      } catch (error) {
      
        console.error(error);
      }
    };
    
	return (
		<div className="login">
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="login__logo">
					<StorefrontIcon className="login__logoImage" fontSize="large" />
					<h2 className="login__logoTitle">SimpleShop</h2>
				</div>
			</Link>
            {error && <div className="error-message">{error}</div>}
			<div className="login__container">
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						className="login__signInButton"
						onClick={() => signIn}>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to the SimpleShop Website Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice, and our
					Interest-Based Ads Notice.
				</p>

				<button className="login__registerButton" onClick={() => register}>
					Create your eShop Account
				</button>
			</div>
		</div>
	);
}
