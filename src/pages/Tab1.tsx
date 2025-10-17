// src/pages/Tab1.tsx
import { IonContent, IonPage, IonIcon } from "@ionic/react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/loginButton";
import { LogoutButton } from "../components/logoutButton";
import { Profile } from "../components/profile";
import { bookOutline } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <IonPage><IonContent>Cargando...</IonContent></IonPage>;

  return (
    <IonPage>
      <IonContent>
        <div className="welcome-container">
          <h1 className="welcome-title">¡Bienvenido!</h1>
          <IonIcon icon={bookOutline} className="book-icon" />
          <div className="auth-container">
            {!isAuthenticated ? (
              <LoginButton />
            ) : (
              <>
                <Profile />
                <LogoutButton />
              </>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
