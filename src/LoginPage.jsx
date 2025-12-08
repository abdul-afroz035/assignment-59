import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";

function LoginPage() {
    function callLoginApi(values) {
        console.log("sending data");
    }
    const schema = Yup.object().shape({
        username: Yup.string().matches(/^[a-zA-Z0-9_]+$/,"username should be alphabates or number").min(3),
        myPassword: Yup.string().min(8).max(12),
    });

    const { handleSubmit,
        values,
        handleChange,
        handleBlur,
        resetForm,
        errors,
        touched,
        isValid,
        dirty,
    } = useFormik({
        initialValues: {
            username: "",
            myPassword: "",
        },
        onSubmit: callLoginApi,
        validationSchema: schema,
    });
    return (
        <div className=" flex flex-col h-full justify-center items-center bg-white max-w-6xl mx-auto my-16 py-6 px-6" >

            <div className="flex flex-col justify-between w-80 px-6 py-2 rounded-md shadow-md bg-white space-y-5 ">
                <div className="text-2xl mb-8 text-primary-default font-serif font-bold">
                    Welcome to amazon
                </div>
                <div>
                    <label htmlFor="myUsername" className="sr-only ">
                        password
                    </label>
                    <input
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="myUsername"
                        name="username"
                        required
                        autoComplete="username"
                        className="relative block w-full appearance-none rounded-none
                        rounded-t-md px-3 py-2 border border-gray-400 text-gray-900
                        placeholder-gray-500 focus:z-10 focus:border-indigo-500
                        focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Username"
                    />
                    {touched.username && errors.username && (
                        <div className="text-red-700">{errors.username}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="sr-only ">
                        password
                    </label>
                    <input
                        value={values.myPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        id="password"
                        name="myPassword"
                        required
                        autoComplete="myPassword"
                        className="relative block w-full appearance-none rounded-none
                        rounded-t-md px-3 py-2 border border-gray-400 text-gray-900
                        placeholder-gray-500 focus:z-10 focus:border-indigo-500
                        focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="enter the password"
                    />
                    {touched.myPassword && errors.myPassword && (
                        <div className="text-red-700">{errors.myPassword}</div>
                    )}
                </div>

                <div className="self-center space-x-2">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="text-white bg-primary-default hover:bg-primary-dark px-2 py-0.5 rounded-sm self-end">
                        Reset
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!isValid || !dirty}
                        className="text-white bg-primary-default hover:bg-primary-dark disabled:bg-primary-light px-2 py-0.5 rounded-sm ">
                        Login
                    </button>
                </div>
                    
                <div className="place-self-center-safe text-sm mt-2 text-gray-400 "> don't have an account?
                   <Link to="/signupPage" className="text-primary-default"> Signup </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;