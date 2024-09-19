import getPost from '@/services/getPost';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const data = await getPost();

    return (
        <div className=''>
            {
                data?.slice(0, 20).map(user =>  <div key={user?.userId} className='border-2 border-red-900 rounded-2xl p-9'>
                        <h3>user title: {user?.title}</h3>
                        <h3>user body: {user?.body}</h3>
                        <button><Link href={`/posts/${user?.id}`}>Details</Link></button>
                    </div>
                )
            }
        </div>
    );
};

export default page;