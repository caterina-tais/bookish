import { useAuth0 } from "@auth0/auth0-react";
import { IonButton } from "@ionic/react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <IonButton expand="block" onClick={() => loginWithRedirect()}>
        Iniciar sesión
        </IonButton>
    );
};
