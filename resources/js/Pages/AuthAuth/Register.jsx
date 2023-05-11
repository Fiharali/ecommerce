import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import './Auth.css'
import Shake from 'react-reveal/Shake';
import Swal from 'sweetalert2'
import Menu from '../Home/Menu/Menu';
import 'animate.css';

export default function Register({auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));

    };




    return (
        <>
            <div className='container-fluid fliiid  d-flex align-items-center justify-content-center'>
                <Menu auth={auth} />
                <div className="  formm  mx-md-5 ">
                    <div className='sign_in text-center mt-2 mb-1'>Sign Un</div>
                    <form className='px-4  ' onSubmit={submit}>
                    {errors.name &&
                            <Shake> <p className='text-warning'>{errors.name}</p></Shake>
                        }
                        <div className="input-group flex-nowrap mb-1" >
                            <label className="mt-2 me-1" ><i className="fa-solid fa-user fa-2xl" style={{ color: '#000000' }} /></label>
                            <input type="text" name='name' placeholder='name' className="form-controll "
                                value={data.name} onChange={(e) => setData("name", e.target.value)} />
                        </div>
                        {errors.email &&
                            <Shake> <p className='text-warning'>{errors.email}</p></Shake>
                        }
                        <div className="input-group flex-nowrap mb-1" >
                            <label className="mt-2 me-1" ><i className="fa-solid fa-envelope fa-2xl" style={{ color: '#000000' }} /></label>
                            <input type="text" name='email' placeholder='email' className="form-controll "
                                value={data.email} onChange={(e) => setData("email", e.target.value)} />
                        </div>
                        {errors.password &&
                            <Shake> <p className='text-warning'>{errors.password}</p></Shake>
                        }
                        <div className="input-group flex-nowrap mb-1" >
                            <label className="mt-2 me-1" ><i className="fa-solid fa-lock fa-2xl" style={{ color: '#000000' }} /></label>
                            <input type="text" name='password' placeholder='password' className="form-controll "
                                value={data.password} onChange={(e) => setData("password", e.target.value)} />
                        </div>
                        {errors.password_confirmation &&
                            <Shake> <p className='text-warning'>{errors.password_confirmation}</p></Shake>
                        }
                        <div className="input-group flex-nowrap mb-1" >
                            <label className="mt-2 me-1" ><i className="fa-solid fa-lock fa-2xl" style={{ color: '#000000' }} /></label>
                            <input type="text" name='password_confirmation' placeholder='password_confirmation' className="form-controll "
                                value={data.password_confirmation} onChange={(e) => setData("password_confirmation", e.target.value)} />
                        </div>

                        <input type="submit" value="Register" className='btnIn   p-2 px-5 mt-6 mb-1 form-control' />
                        <span className='mt-6'> did you not have a account <Link href={route('login')}> Login ?</Link></span>
                    </form>
                </div>
            </div>
        </>
    )
}
