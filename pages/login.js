import Head from 'next/head';
import styles from '../assets/css/styles.module.css';
import React, { useState } from "react";

const Candx_login = () => {
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	
	const handleSubmit = async (event) => {
    	event.preventDefault();

    // Make a POST request to your API route (e.g., '/api/save-user')
    const response = await fetch('/api/save-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, id }),
    });

    if (response.ok) {
      // Handle successful response
      console.log('Cookies set successfully');
	  window.location.href = '/';
      // Redirect the user to the desired page
      // Example: router.push('/dashboard');
    } else {
      // Handle error response
      console.error('Failed to set cookies');
    }
  };
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>Login</title>
		</Head>	
		<div className={styles.login_bg}>
			<div className={styles.login_frame}>
				<div className={styles.login_logo}>
					<img className={styles.login_logo} src="rcf_logo_172_X_155.png" alt="Logo" />
				</div>
				<div style={{fontStyle: 'normal', marginBottom: '10px', marginTop: '10px', fontWeight: 700, fontSize: '24px', lineHeight: '32px' 
				}}>Login to RCF eTest Trials</div>
				<div style={{width: '312px', height: '22px', fontStyle: 'normal', fontWeight: 400,
					fontSize: '14px', lineHeight: '22px', padding:'none',textAlign:'center'}}> Fill in details appropriately to begin your quiz
				</div>
				<div className={styles.frame8}>
					<div className={styles.frame4}>
						<form method="" action="" autoComplete="off" onSubmit={handleSubmit}>
							<label style={{fontSize: "16px",}}>Full Name</label>
							<input type="text" name="user_id" id="user_id" placeholder="Full Name (Surname Firstname Other-optional)" value={name} onChange={(e) => setName(e.target.value)}
							className={styles.input}/>
							<br/>
							<label>Course Code</label>
							{/* <input type="text" name="id" id="id" placeholder="Course Code" value={id} onChange={(e) => setId(e.target.value)}
							className={styles.input}/> */}

							<select name="id" className={styles.select} onChange={(e) => setId(e.target.value)}>
								<option value="CHM101">CHM 101</option>
								<option value="PHY101">PHY 101</option>
								<option value="MAT101" selected>MAT 101</option>
							</select>
							<button className={styles.loginbtn}>LOGIN</button>
						</form>
					</div>
				</div>
			</div>
			<footer className={styles.footer}>&copy; RCF dev Team (2025)</footer>
		</div>
	</div>
  );
};

export default Candx_login;