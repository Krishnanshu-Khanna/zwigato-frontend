import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return null;
	}

	if (isAuthenticated) {
		return <Outlet />; //All the children componemts of this component will be rendered here
	}

	return <Navigate to='/' replace />;
};

export default ProtectedRoute;
