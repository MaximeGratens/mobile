import {IonContent, IonHeader, IonItem, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

const Menu: React.FC = () => (
    <>
        <IonMenu side="end" menuId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    </>
)

export default Menu