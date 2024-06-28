import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
	const navigate = useNavigate();
	const hasCreated = useRef(false);
	const { user } = useAuth0();
	const { createUser } = useCreateMyUser();

	useEffect(() => {
		if (user?.sub && user?.email && !hasCreated.current) {
			createUser({ auth0Id: user.sub, email: user.email });
			hasCreated.current = true;
		}
		navigate("/");
	}, [createUser, navigate, user]);
    
	return <div>Authenticating...</div>;
};

export default AuthCallbackPage;
