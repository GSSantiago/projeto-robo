import robotFace from "../services/robotFace";

function useRobotFace(){

async function fetchExpressionList(){
    try{
      const data = await robotFace.getExpressiondata();
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

async function changeExpression(id){
    try{
        const data = await robotFace.changeExpression(id);
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

async function changeExpressionByBits(id){
    try{
        const data = await robotFace.changeExpressionByBits(id);
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

  return {fetchExpressionList, changeExpression, changeExpressionByBits }
}

export  default useRobotFace