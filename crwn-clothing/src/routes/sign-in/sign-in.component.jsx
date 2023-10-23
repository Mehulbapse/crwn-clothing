import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () =>{
    const logGoogleUser = async ()=>{
        const  response = await signInWithGooglePopup();
        console.log(response)
    }
    return (
        <div>
            <h1>
                In Sign In 
            </h1>
            <button onClick={logGoogleUser}>
                Sign in With Google
            </button>
        </div>
    )
}

export default SignIn