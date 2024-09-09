import { useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { login as loginService  } from "../../services/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Tip: Never log the password. If ever you do, make sure you remove it as soon as you can
            console.log(username, password);

            // setUsername("");
            // setPassword("");

            await loginService(username, password);

            navigate( `/welcome/${username}` );

            // Check this for more details - https://fkhadra.github.io/react-toastify/introduction/
            toast( "Add things to do and track your todos based on their deadlines." );
        } catch (error) {
            toast((error as Error).message);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <hr />
            <Form onSubmit={login}>
                <Form.Group
                    className="mb-4 col-12 col-sm-8 col-md-6 col-lg-4"
                    controlId="username"
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="johndoe"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-4 col-12 col-sm-8 col-md-6 col-lg-4"
                    controlId="password"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Login
                </Button>
            </Form>
        </>
    );
};

export default Login;