import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import './Auth.css'
import Shake from 'react-reveal/Shake';

function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        // remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {

        e.preventDefault();
        post(route('login'));
    };

    return (
        <>




            <div className='container-fluid fliiid  d-flex align-items-center justify-content-center'>
                <div className="  formm ">
                    <div className='d-flex justify-content-center '>
                        <img src="/images/avatar2.png" alt="ihg" width={200} />
                    </div>
                    <form className='p-5 ' onSubmit={submit}>
                        {errors.email &&
                            <Shake> <p className='text-warning'>{errors.email}</p></Shake>
                        }
                        <div class="input-group flex-nowrap mb-3" >
                            <span class="input-group-text" id="addon-wrapping">&nbsp;&nbsp; Email&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="text" name='email' placeholder='email' className="form-control " id="email" aria-describedby="emailHelp "
                                value={data.email} onChange={(e) => setData("email", e.target.value)} />
                        </div>
                        {errors.password &&
                            <Shake> <p className='text-warning'>{errors.password}</p></Shake>
                        }
                        <div class="input-group flex-nowrap mb-3">
                            <span class="input-group-text" id="addon-wrapping"> Password</span>
                            <input type="password" name='password' placeholder='password' className="form-control " id="password" aria-describedby="emailHelp "
                                value={data.password} onChange={(e) => setData("password", e.target.value)} />
                        </div>
                        <input type="submit" value="Login" className='btn btn-primary p-2 px-5 form-control' />
                        did you not have a account <Link href={route('register')}> registre ?</Link>
                    </form>
                </div>
            </div>




        </>
    );
}

export default Login





{/* <div className="mb-3">
                                <span class="input-group-text" id="addon-wrapping">@</span>
                                    <input type="text" name='title' placeholder='Title' className="form-control " id="title" aria-describedby="emailHelp "
                                        value={data.title} onChange={(e) => setData("title", e.target.value)} />
                                    {errors.title &&
                                        <Shake> <p className='text-danger'>{errors.title}</p></Shake>
                                    }
                                </div> */}
{/* <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>





                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                </form> */}
