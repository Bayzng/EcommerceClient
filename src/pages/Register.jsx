import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import { TiUserAddOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { register, sendVerificationEmail, RESET } from "../redux/features/authSlice";
import { validateEmail } from "../redux/features/authService";

const initialState = {
    name: "",
    email: "",
    password: "",
    // password2: "",
  };

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { name, email, password } = formData;

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const { isLoading, isLoggedIn, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  useEffect(() => {
    // Check Lower and Uppercase
    // if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    //   setUCase(true);
    // } else {
    //   setUCase(false);
    // }
    // // Check For Numbers
    // if (password.match(/([0-9])/)) {
    //   setNum(true);
    // } else {
    //   setNum(false);
    // }
    // Check For Special char
    // if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    //   setSChar(true);
    // } else {
    //   setSChar(false);
    // }
    // Check if password up to 6
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    // if (password !== password2) {
    //   return toast.error("Passwords do not match");
    // }

    const userData = {
      name,
      email,
      password,
    };
    console.log(userData);

    await dispatch(register(userData));
    // await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isLoggedIn && isSuccess) {
      navigate("/");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, message, navigate, dispatch]);


  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Bayz_Store</span>
            <span className="title">Register</span>

            <form onSubmit={registerUser}>
                <input onChange={handleInputChange} type="text" name="name" placeholder="YOUR NAME"/>
                <input onChange={handleInputChange} type="email" name="email" placeholder="EMAIL"/>
                <input onChange={handleInputChange}  type="password" name="password" placeholder="PASSWORD"/>
                <input onChange={handleInputChange} style={{display: "none"}} type="file" id="file"/>
                <label htmlFor="file">
                    profile image icon
                    <span>Add an avater</span>
                </label>
                <div>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </div>
                <button>SIGN-UP</button>
            </form>
            <p>Do not have an account? LOGIN</p>
        </div>
    </div>
  )
}

export default Register