import  {LogoutButton, LoginButton} from  "./Buttons"



const Specifications = ({name,  discount, unreadMessages, isLoggedIn}) => (
    <section>
        <p>{name}</p>git 
        <p>{discount}</p>
        <h1>Hello Huy{unreadMessages}!</h1>
        {unreadMessages.length > 0 && (
            <p>You have {unreadMessages.length} unread messages.</p>
        )}
        <div>
            <p>
                {isLoggedIn ? 'Logout' : 'Login'}
            </p>
            {isLoggedIn ? <LogoutButton /> : <LoginButton/> }
        </div>
    </section>
);
export default Specifications;


