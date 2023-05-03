import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

    function getClassName(active) {
        if (active) {
            return "btn btn-primary bg-primary text-dark px-4 m-1 border-1 rounded text-center";
        } else {
            return "btn btn-primary bg-white text-dark px-4 m-1 border-1 rounded text-center ";
        }
    }

    return (
        links.length > 3 && (
            <div className="mt-4">
                <div className="d-flex justify-content-center ">
                    {links.map((link, key) => (
                        link.url === null ?
                            (<div
                                className="btn btn-primary text-dark text-center"
                            >{link.label}</div>) :

                            (<Link
                                className={getClassName(link.active)}
                                href={link.url}
                            >{link.label}</Link>)
                    ))}
                </div>
            </div>
        )
    );
}
