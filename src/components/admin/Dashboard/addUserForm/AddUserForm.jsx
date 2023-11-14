import { useSelector } from 'react-redux';
import Header from "../../../partials/header/Header";

const AddUserForm = () => {
    const username = useSelector(state => state.admin.username);
    
    return (
        <>
            <Header user={username} role={'admin'} />
            <div>AddUserForm</div>
        </>
    );
};

export default AddUserForm;