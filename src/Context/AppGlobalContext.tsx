import * as React from "react";

export interface IUserInformation {
    UserName?:string,
    IsAuthenticated:boolean
}

export interface IAppGlobalContext {
    UserInformation?:IUserInformation,
    SignIn?:(userName:string, passWord:string) => void
}

export const AppGlobalContext = React.createContext<IAppGlobalContext>({});

export const AppGlobalContextProvider: React.FC = ({
    children
}) => {

    const [UserInformation, SetUserInformation] = React.useState<IUserInformation>({
        IsAuthenticated:false
    });

    const HandleSign = (userName:string, passWord:string) => {
    }

    return (
        <AppGlobalContext.Provider value={{
            UserInformation,
            SignIn:(userName:string, passWord:string) => {
                HandleSign(userName, passWord);
            }
        }}>
            {children}
        </AppGlobalContext.Provider>
    );
};


