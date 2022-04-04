import Form from "../Form";

const Registration = ()=>{
    const data = {
        title:"User Registration",
        fields:[{
            label:"First Name",
            type:"text",
            placeholder:"First Name",
            name:"firstname",
            required:true,
            onChange:(value)=>{
                console.log(value);
            }
        },{
            label:"Last Name",
            type:"text",           
            name:"lastname",
            placeholder:"Last Name",
            required:true,
            onChange:(value)=>{
                console.log(value);
            }
        },{
            label:"Email",
            type:"email",
            name:"email",
            placeholder:"Email",            
            required:true,
            onChange:(value)=>{
                console.log(value);
            }
        },{
            label:"Password",
            type:"password",
            name:"password",
            placeholder:"password",
            required:true,
            onChange:(value)=>{
                console.log(value);
            }
        },{
            label:"Confirm Password",
            type:"password",
            name:"confirmpassword",
            placeholder:"confirm password",
            required:true,
            onChange:(value)=>{
                console.log(value);
            }
        }],
        submit:(e)=>{
            e.preventDefault();
            let form_data = new FormData(e.target);
            let data = {};
            form_data.forEach(function(value, key){
                data[key] = value;
            });
            console.log(data);
        }
    }
    return(
        <>
            <Form {...data}/>
        </>
    );
};

export default Registration;