import { redirect } from "next/navigation";

const getDetailPost = async (id)=> {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;

}

const page = async ({params}) => {
    const id = params?.id;
    const user = await getDetailPost(id)
    console.log(user)
    console.log(id)

    
    if(user){
        redirect(`/about`)
    }
    
    
    return (
        <div key={user?.userId} className='border-2 border-red-900 rounded-2xl p-9'>
        <h3>user title: {user?.title}</h3>
        <h3>user body: {user?.body}</h3>
    </div>
    );
};

export default page;