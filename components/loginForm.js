import { useAuth } from '../contexts/auth'

export default function LoginForm(){
    const { login } = useAuth()
    function loginHandler(event){
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value
        login(username,password)
    }
    return(
        <div className="h-screen py-24 bg-black">
            <form className="py-3 mx-5 bg-white" onSubmit={loginHandler}>
                <div className="flex flex-col gap-10 p-8 mx-2 my-3 text-4xl font-semibold text-center bg-gray-200 border-4 border-green-500 rounded-lg py-14 pb-14">
                    <div className="flex flex-col">
                        <label className="py-4">USER NAME</label>
                        <input className="p-5 mx-10" name="username" placeholder="User Name" required/>
                    </div>
                    <div className="flex flex-col pb-14">
                        <label className="py-4">PASSWORD</label>
                        <input type="password" className="p-5 mx-10" name="password" placeholder="password" required/>
                    </div>
                    <button type="submit" className="p-10 mx-10 font-medium bg-green-500 rounded-lg">SIGN IN</button>
                </div>
            </form>
        </div>
    )
}