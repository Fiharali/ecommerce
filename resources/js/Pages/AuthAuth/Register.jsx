import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import './Auth.css'
import Shake from 'react-reveal/Shake';
import Swal from 'sweetalert2'

export default function Register() {
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
                <div className="  formm ">
                    <div className='d-flex justify-content-center '>
                        <img src="/images/avatar2.png" alt="ihg" width={200} />
                    </div>
                    <form className='mx-5 ' onSubmit={submit}>

                        {errors.name &&
                            <Shake>  <p className='text-warning'>{errors.name}</p></Shake>
                        }
                        <div class="input-group flex-nowrap mb-1" >
                            <span class="input-group-text" id="addon-wrapping">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="text" name='name' placeholder='name' className="form-control " id="name"
                                value={data.name} onChange={(e) => setData("name", e.target.value)} />

                        </div>
                        {errors.email &&
                            <Shake> <p className='text-warning'>{errors.email}</p></Shake>
                        }
                        <div class="input-group flex-nowrap mb-1">
                            <span class="input-group-text" id="addon-wrapping"> Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="email" name='email' placeholder='email' className="form-control " id="email"
                                value={data.email} onChange={(e) => setData("email", e.target.value)} />
                        </div>
                        {errors.password &&
                            <Shake> <p className='text-warning'>{errors.password}</p></Shake>
                        }
                        <div class="input-group flex-nowrap mb-1">
                            <span class="input-group-text" id="addon-wrapping"> Password &nbsp;&nbsp;&nbsp;</span>
                            <input type="password" name='password' placeholder='password' className="form-control " id="password"
                                value={data.password} onChange={(e) => setData("password", e.target.value)} />
                        </div>
                        {errors.password_confirmation &&
                            <Shake> <p className='text-warning'>{errors.password_confirmation}</p></Shake>
                        }
                        <div class="input-group flex-nowrap mb-2">
                            <span class="input-group-text" id="addon-wrapping">C Password</span>
                            <input type="password" name='password_confirmation' placeholder='password_confirmation' className="form-control " id="password_confirmation"
                                value={data.password_confirmation} onChange={(e) => setData("password_confirmation", e.target.value)} />
                        </div>
                        <input type="submit" value="Login" className='btn btn-primary p-1 mb-2 px-5 form-control' />
                        did you have a account <Link href={route('login')}> Login ?</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
