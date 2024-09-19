import { redirect } from "next/dist/server/api-utils";

  // dynamic vabe tab er id ta change korar jonno, mane product er jei dynamic rout or id seita add korar jonno:
  export const generateMetadata = async ({params}) => {
      console.log(params.id)
    return {
        title: `Post Details ${params.id}`
    }
}


const MealDetail = ({params}) => {

   
 

    return (
        <div>
            This is a single meal page details
        </div>
    );
};

export default MealDetail;