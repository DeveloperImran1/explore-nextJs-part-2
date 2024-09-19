
const getTime = async ()=>{
    const res = await fetch('http://localhost:3000/time', {cache: 'no-store'})
    const data = await res.json()
    console.log(data.currentTime)
    return data.currentTime;
}
const page = () => {
    const currentTime = getTime();

    return (
        <div>
            <h1 className="text-center text-2xl">Time: {currentTime}</h1>            
        </div>
    );
};

export default page;