import Axios from 'axios';

export const fetchAllMenu = () => {
    // return Axios.get(`${process.env.REACT_APP_API_URL}/product`);
    return Axios.get('http://192.168.43.73:7000/product');
};

export const login = (email,password) => {
    return Axios.post('http://192.168.43.73:7000/auth/login',{email, password});
};
export const register = (fullname,username,email,password,phone)=>{
    return Axios.post('http://192.168.43.73:7000/auth/register',{
        fullname,
        username,
        email,
        password,
        phone,
        level_id:3,
    });
};

export const fetchAllCategory = ()=>{
    return Axios.get('http://192.168.43.73:7000/category');
};
