
// src/components/LogoutButton.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { IonButton } from "@ionic/react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <IonButton
        expand="block"
        color="danger"
        onClick={() =>
            logout({ logoutParams: { returnTo: "myapp://logout" } })
        }
        >
        Cerrar sesión
        </IonButton>
    );
};
