try{
    //error through
    throw new Error("name");
}catch(error){
    console.log(error.message);
}finally{
    console.log("db disconnect");
}