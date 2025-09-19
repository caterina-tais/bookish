// src/pages/Tab1.tsx
import { IonContent, IonPage } from "@ionic/react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/loginButton";
import { LogoutButton } from "../components/logoutButton";
import { Profile } from "../components/profile";

const Tab1: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <IonPage><IonContent>Cargando...</IonContent></IonPage>;

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {!isAuthenticated ? (
          <LoginButton />
        ) : (
          <>
            <Profile />
            <LogoutButton />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
