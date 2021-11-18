import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Shippping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 m-auto">
                    <p className="h3">Address</p>
                    <form className="shipping-form p-2" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email")} />
                        <input placeholder='address' {...register("Address")} />
                        <input placeholder='city' {...register("city")} />
                        <input placeholder='phone' {...register("phone")} />
                        
                        <input type="submit" />
                     </form>
                </div>
            </div>
        </div>
    );
};

export default Shipping;