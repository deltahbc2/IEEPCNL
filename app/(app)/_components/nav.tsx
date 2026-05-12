const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 bg-white border-b border-neutral-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2">
                            <img src="/logoCropped.png" alt="Logo" className="size-16"/>
                            <span className="font-bold text-xl tracking-tight text-neutral-900">Foro IEEPCNL</span>
                        </a>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-brand-blue font-medium border-b-2 border-brand-blue py-5">Inicio</a>
                        <a href="#" className="text-neutral-600 hover:text-brand-blue font-medium py-5 transition-colors">Consultas</a>
                        <a href="#" className="text-neutral-600 hover:text-brand-blue font-medium py-5 transition-colors">Presupuesto</a>
                        <a href="#" className="text-neutral-600 hover:text-brand-blue font-medium py-5 transition-colors">Debates</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors">
                            <i data-fa-i2svg=""><svg className="svg-inline--fa fa-bell" aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg></i>
                        </button>
                        <div className="relative flex items-center gap-3 cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-neutral-900 leading-none">Ana García</p>
                                <p className="text-xs text-brand-green font-medium mt-1"><i className="mr-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-medal" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"></path></svg></i>Ciudadano Activo</p>
                            </div>
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Profile" className="h-10 w-10 rounded-full border-2 border-white shadow-sm object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;