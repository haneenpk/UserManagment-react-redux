import { useSelector } from 'react-redux';
import Header from "../../../partials/header/Header";

const EditUserForm = () => {
    const username = useSelector(state => state.admin.username);

    return (
        <>
            <Header user={username} role={'admin'} />
            <div>EditUserForm</div>
        </>
    );
};

export default EditUserForm;