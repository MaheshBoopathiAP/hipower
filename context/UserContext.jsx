'use client';
import React,{createContext,useContext,useState,useEffect} from "react";
import { toast } from 'react-hot-toast';
import { signIn, signOut, useSession } from "next-auth/react";
import auth from '../libs/firebase';
import { RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth';

const UserContext = createContext();

const UserContextWrapper = ({children}) => {

    const {data:session} = useSession();

    const [otp,setOtp] = useState('');
    const [num,setNum] = useState('');
    const [number,setNumber] = useState('');
    const [popup, setPopup] = useState(false);
    const [showform, setShowform] = useState(true);
    const [loading,setLoading] = useState(false);
    const [showotp,setShowotp] = useState(false);
    const [user, setUser] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        mobile:'',
        role:'user'
      }) 

      const getUser = async () => {
        if(session){
          const res = await fetch('/api/user/info',{
            cache:'no-cache',
            method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(session.user.sub)
          })
          return res.json();
        }
      }

      const handleChange2 = (e) => {
        let name = e.target.name;
        let value = e.target.value;
  
        setUser((prev)=>{
          return{
            ...prev,
            [name]:value
          }
        })
  
        console.log(user);
      }  

        

  const onCaptchaVerify = () => {
    if(!window.RecaptchaVerifier){
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible ',
            'callback': (response) => {
              onSignup();
              setLoading(true);
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
              window.recaptchaVerifier.render().then(function(widgetId) {
                grecaptcha.reset(widgetId);
              });
            }
          });
    }
  }

  const onCaptchaVerify2 = () => {
    if(!window.RecaptchaVerifier){
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible ',
            'callback': (response) => {
              onLogin();
              setLoading(true);
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
              window.recaptchaVerifier.render().then(function(widgetId) {
                grecaptcha.reset(widgetId);
              });
            }
          });
    }
  }

  const onSignup = () => {
    setLoading(false);
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier

    const formatPh = '+'+num;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).  
      window.confirmationResult = confirmationResult;
      setLoading(false);
      toast.success('OTP sended successfully')
      setShowotp(true);
      // ...
    }).catch((error) => {
      
    });

    
  }

  const onLogin = (e) => {
    e.preventDefault();
    setLoading(false);
    onCaptchaVerify2();

    const appVerifier = window.recaptchaVerifier

    const formatPh = '+'+number;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).  
      window.confirmationResult = confirmationResult;
      setLoading(false);
      toast.success('OTP sended successfully')
      setShowotp(true);
      // ...
    }).catch((error) => {
      window.recaptchaVerifier.render().then(function(widgetId) {
        grecaptcha.reset(widgetId);
      });
    });
  }

  const onOTPverify = () => {
    window.confirmationResult.confirm(otp).then(async(res)=>{
        console.log(res);
        toast.success('OTP verified');
        insertUser();
        setShowotp(false);
        setPopup(false);
        setShowform(true);
        setOtp('')
        toast.success('User can now Log In');
    });
  }

  const onOTPverify2 = () => {
    window.confirmationResult.confirm(otp).then(async(res)=>{
        toast.success('OTP verified');
        setShowotp(false);
        setPopup(false);
        setShowform(true);
        setOtp('');
        const check = await signIn('credentials',{
          redirect:false,
          mobile:number,
          callbackUrl:'/'
        })
        

    });
  }

  const checkUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      });
      console.log(res)

      if(res.status=='200'){
        onSignup();
      }else if(res.status=='201'){
            toast.error('User already exists')
        
      }
  }

  const insertUser = async () => {
    const res = await fetch('/api/user/verified',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      });
      console.log(res)

      if(res.status=='200'){
        toast.success('Account created')
      }
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/find',{
      method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(number)
    })
    const result = await res.json();

    if(result.status==201){
      onLogin();
      
    }else{
      toast.error('No account with this number exists')
    }
  }

  useEffect(()=>{
    
    setUser((prev)=>{
      return{
        ...prev,
        mobile:num
      }
    })
  },[num])

  

  // useEffect(()=>{
  //   async function fetchUser(){
  //     getUser().then((res) => {
  //       setProfile(res.user)
  //       // console.log(profile);
  //     })
  //   }
  //   () => fetchUser()
  // },[session])

    return(
        <UserContext.Provider value={{checkUser,handleChange2,getUser,session,otp,setOtp,num,setNum,number,setNumber,popup,showform,setPopup,setShowform,setShowotp
          ,loginUser,insertUser,checkUser,onOTPverify,onOTPverify2,showotp,onLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserGlobalContext = () => {
    return useContext(UserContext)
}

export {useUserGlobalContext,useContext,UserContextWrapper}


