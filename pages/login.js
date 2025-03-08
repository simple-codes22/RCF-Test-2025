import Head from "next/head";
import styles from "../assets/css/styles.module.css";
import React, { useState } from "react";

const Candx_login = () => {

	const [name, setName] = useState('');
	const [id, setId] = useState('CHM101'); // Change priority later
	
	const handleSubmit = async (event) => {
    	event.preventDefault();


    // Make a POST request to your API route (e.g., '/api/save-user')
    const response = await fetch("/api/save-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id }),
    });

    if (response.ok) {
      // Handle successful response
      console.log("Cookies set successfully");
      window.location.href = "/";
      // Redirect the user to the desired page
      // Example: router.push('/dashboard');
    } else {
      // Handle error response
      console.error("Failed to set cookies");
    }
  };
  return (
    <div className={styles.body}>
      <Head>
        <link rel="icon" href="rcf_logo_172_X_155.png" />
        <title>RCF eTest Trials | Login</title>
      </Head>
      <div className={styles.login_bg}>
        <div className={styles.login_frame}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <div>
              <img src="rcf_logo_172_X_155.png" className={styles.login_logo} />
            </div>

            <div>
              <h1 className={styles.login_title}>Login to RCF eTest Trials</h1>
            </div>
            <div style={{
              fontSize: '13px',
              marginBottom: '45px',
              marginTop: "10px"
            }}>
              Fill in the details appropriately to get started with your quiz
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: "center",
            width: '100%'
          }}>
          <form
                method=""
                action=""
                autoComplete="off"
                onSubmit={handleSubmit}
                style={{width: "100%", position: 'relative'}}
              >
                <label style={{ fontSize: "14px", marginTop: '10px', fontWeight: '500' }}>Full Name</label>
                <input
                  type="text"
                  name="user_id"
                  required
                  id="user_id"
                  placeholder="Surname Firstname Other-name(optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                />
                <br />
                <label style={{ fontSize: "14px", marginTop: '10px', fontWeight: '500' }}>Course Code</label>
                {/* <input type="text" name="id" id="id" placeholder="Course Code" value={id} onChange={(e) => setId(e.target.value)}
							className={styles.input}/> */}

                <select
                  name="id"
                  defaultValue="CHM101"
                  className={styles.select}
                  onChange={(e) => setId(e.target.value)}
                >
                  <option className={styles.option} value="CHM101">
                    CHM 101
                  </option>
                  <option className={styles.option} value="PHY101">
                    PHY 101
                  </option>
                  <option className={styles.option} value="MAT101">
                    MAT 101
                  </option>
                </select>
                <button className={styles.loginbtn} >Login</button>
              </form>
          </div>


        </div>
        </div>
        <footer className={styles.footer}>&copy; RCF dev Team (2025)</footer>
      {/* </div> */}
    </div>
  );
};

export default Candx_login;
