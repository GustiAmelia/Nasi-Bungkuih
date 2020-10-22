import Axios from 'axios';

export const fetchAllMenu = () => {
    // return Axios.get(`${process.env.REACT_APP_API_URL}/product`);
    return Axios.get('http://192.168.43.73:7000/product');
};

export const login = (email,password) => {
    return Axios.post('http://192.168.43.73:7000/auth/login',{email, password});
};
export const register = (username,email,password)=>{
    return Axios.post('http://192.168.43.73:7000/auth/register',{
        username,
        email,
        password,
        level_id:3,
    });
};

export const fetchAllCategory = ()=>{
    return Axios.get('http://192.168.43.73:7000/category');
};

export const searchMenu = (name,sortby) => {
    return Axios.get(`http://192.168.43.73:7000/product/search?name=${name}&sortby=${sortby}`);
};
