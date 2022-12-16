import Link from 'next/link';

export default ( { currentUser } ) => {

    const links = [
        !currentUser && { label: 'sign Up', href: 'auth/signup' },
        !currentUser && { label: 'sign In', href: 'auth/signIn' },
        currentUser ? { label: 'sign Out', href: 'auth/signout' } : { href: ''}
    ]
    .filter(linkCongif => linkCongif)
    .map( ({ label, href }) => {
        return <li key={href} className='nav-item m-1'>
            <Link href={ href }>{ label }</Link>
        </li>
    } )

    return (
        <nav className="navbar navbar-light bg-light">
            <Link href="/" className='navbar-brand'>
                GitTix
            </Link>

            <div className='d-flex justify-content-end'>
                <ul className='nav d-flex align-items-center'>
                    { links }
                </ul>
            </div>
        </nav>
    )
}