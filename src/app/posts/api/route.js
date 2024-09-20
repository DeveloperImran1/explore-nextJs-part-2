// export async function GET() {
//     return Response.json({
//         comments
//     })
// }

export async function POST(request){
    const newComment = await request.json()
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    })

    return Response.json({
        message: 'new Comment add',
        comments
    })
}

// Uporer niom a amra  api request pathate and responce pete pari. Abar api a ahit kore browser a cookieo set korte pari.

export async function GET() {
    return Response.json(comments, {
        headers: {
            "set-cookies": "theme-dark"
        }
    })
}

const comments = [
    {
        id: 1,
        message: 'comments 1'
    },
    {
        id: 2,
        message: 'comments 2'
    },
    {
        id: 3,
        message: 'comments 3'
    },
]


// -----------------
