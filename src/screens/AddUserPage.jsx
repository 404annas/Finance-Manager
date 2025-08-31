import React from 'react';
import Sidebar from '../components/Sidebar';
import AddUserModal from "../components/AddUserModal"

const AddUserPage = () => {
    return (
        <div className='flex items-center bg-white h-screen'>
            <Sidebar />
            <AddUserModal />
        </div>
    );
};

export default AddUserPage;
