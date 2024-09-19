// time or data k every refresh a update korar jonno ai nicher line use korte pari.. aita buiild korar pore kaj kre. localy korbena. ar clien theke update korar jonno about page er system follwe korete pari.
// export const dynamic = 'force-dynamic'; 
export async function GET(){
    return Response.json({
        currentTime: new Date().toLocaleTimeString()   // toLocalTimeString() dia current time pawa jai.
        // currentTime: new Date().toLocaleDateString()   // toLocaleDateString() dia current date pawa jai.
    })
}