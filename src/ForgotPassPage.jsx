import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { Link } from "react-router";
import { CiShoppingCart } from "react-icons/ci";

function ForgotPassPage() {
    function callForgotApi() {
        console.log("data sending");
    }

    const schema = Yup.object().shape({
        myEmail: Yup.string().email(),
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
            myEmail: "",
        },
        onSubmit: callForgotApi,
        validationSchema: schema,
    });

    return (
        <div className=" flex flex-col h-full justify-center items-center bg-white max-w-6xl mx-auto my-16 py-6 px-6" >
            <div className="text-9xl text-gray-900 pb-4">
                <CiShoppingCart />
            </div>
            <div className="flex flex-col justify-between w-90 px-6 py-2 rounded-md shadow-md bg-white space-y-5 ">
                <div className="text-2xl mb-8 text-primary-default font-serif font-bold">
                    DOWN-TOWN CityCart
                </div>
                <div>
                    <label htmlFor="Email-Address" className="sr-only ">
                        user email
                    </label>
                    <input
                        value={values.myEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        id="Email-Address"
                        name="myEmail"
                        required
                        autoComplete="myEmail"
                        className="relative block w-full appearance-none rounded-none
                            rounded-t-md px-3 py-2 border border-gray-400 text-gray-900
                            placeholder-gray-500 focus:z-10 focus:border-indigo-500
                            focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Email Address"
                    />
                    {touched.myEmail && errors.myEmail && (
                        <div className="text-red-700">{errors.myEmail}</div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isValid || !dirty}
                    className="text-white bg-primary-default hover:bg-primary-dark
                 disabled:bg-primary-light px-2 py-0.5 rounded-sm  ">
                    request reset link
                </button>
                <Link to="/"
                    className="self-center text-sm  text-primary-default hover:text-primary-dark"> Back to Login
                </Link>
            </div>
        </div>


    )
}
export default ForgotPassPage;