// src/components/Profile.tsx
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) return null;

    return (
        <div style={{ textAlign: "center" }}>
        <img src={user?.picture} alt={user?.name} style={{ borderRadius: "50%" }} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        </div>
    );
};
