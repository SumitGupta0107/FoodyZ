import { Formik } from 'formik';
import React, { useEffect } from 'react';
import * as YUP from "yup";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../helperHooks/useLocalStorage';

// userSchema for Name, Email nad Password

const userSchema = YUP.object().shape(
    {
        /*Name: YUP.string().required("Name is required"),*/
        email: YUP.string().required("Email is required").email("Enter a Valid Email"),
        password: YUP.string().required("Password required").min(8,"Password should contain atleast 8 characters").max(16,"Password should not contain more then 16 characters"),
    }
);

const Login = () => {
    const navigate = useNavigate();
    const [getLocal, setLocalStorageValue] = useLocalStorage("user");

    useEffect(() => {
        // if token length is equal to 100 then navigate to previous page
        if(getLocal?.token?.length === 100){
            navigate(-1);
        }
    },[]);


        
      
     function handleLogin(values)
     {
        let i = values?.email?.indexOf("@");
        let name = values?.email.slice(0,i);
        
    
         //generating a random token for 100 words
    const getToken = () => {
        const randomValues = new Uint8Array(100); // Create an array for 100 random bytes
        window.crypto.getRandomValues(randomValues); // Fill the array with random values
      
        // Convert the random values to a string
        const randomString = Array.from(randomValues)
          .map((value) => String.fromCharCode(value % 26 + 97)) // Convert to lowercase letters (a-z)
          .join("");
      
        return randomString;
      };
        
            
      setLocalStorageValue({
        ...getLocal,
        "userName": name,
        "token": getToken()
      })

      //navigating to previous page
      navigate(-1);
     } 
      
     // if length of token is equal to 100 then return null
  if (getLocal?.token?.length === 100) return null;

  return (
    <React.Fragment>
        <Formik
            validationSchema={userSchema}
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={(values) => {
                handleLogin(values);
            }}
            >
     {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         /* and other goodies */
       }) => (
        <div className="login-container">
            <div className="login-form">
            <form noValidate onSubmit={handleSubmit}>
                <span>Login Form</span>
                
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />
                  <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                  <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit">
             Login
           </button>
         </form>
            </div>        
        </div>
       )}
            </Formik>
        </React.Fragment>
  );
};

export default Login;
