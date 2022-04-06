import Form from "../Form";
/**
 * 
 * create a Form in generic way in which they require input types as Array of object like {type:"email",title:"Email"}
 * form component must have output data after submit button clicked!
 */

const Login = () => {
    const loginData = {
        title: "Login",
        fields: [{
            label: "Email",
            type: "email",
            placeholder: "Email",
            name: "email",
            required: true,
            onChange: (value) => {
                console.log(value);
            }
        }, {
            label: "Code",
            type: "text",
            name: "code",
            pattern: "[0-9]",
            placeholder: "type here code",
            onChange: (value) => {
                console.log(value);
            }
        }, {
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "password",
            onChange: (value) => {
                console.log(value);
            }
        }],
        submit: (e) => {
            e.preventDefault();
            let form_data = new FormData(e.target);
            let data = {};
            form_data.forEach(function (value, key) {
                //key="email"|key="code"|key="password" 
                data[key] = value;
            });
            console.log(data);
        }
    }
    return (
        <>
            <Form {...loginData} />
        </>
    );
};

export default Login;