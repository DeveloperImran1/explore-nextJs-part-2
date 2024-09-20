import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getTime = async ()=>{
    const res = await fetch('http://localhost:3000/time', {cache: 'no-store'})
    const data = await res.json()
    console.log(data.currentTime)
    return data.currentTime;
}
const page = async () => {
    const currentTime = getTime();

    // aita server component,, tai useSession hook use kora jabena. So getServerSession use korte hobe. ar er perameter hisabe authOptions jeita api/auth/[...nextauth]/route.jsx file theke a export kore disi. 
    const session = await getServerSession(authOptions);
    console.log(session)


    return (
        <div>
            <h1 className="text-center text-2xl">Time: {currentTime}</h1>            
        </div>
    );
};

export default page;