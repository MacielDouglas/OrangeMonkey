'use client';

import { GlobalContext } from '@/context';
import { adminNavOptions, navOptions, styles } from '@/utils';
import { Fragment, useContext, useEffect } from 'react';
import CommonModal from '../CommonModal';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';

function NavItems({ isModalView = false, isAdminView, router }) {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${
        isModalView ? '' : 'hidden'
      }`}
      id="nav_items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? 'border-none' : 'border border-gray-100'
        }`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const { user, isAuthUser, setIsAuthUser, setUser } =
    useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();

  console.log('Path', pathName);

  const handleToggleMenu = () => {
    setShowNavModal(!showNavModal);
  };

  // Adicione um event listener para fechar o menu ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      if (showNavModal) {
        setShowNavModal(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showNavModal, setShowNavModal]);

  console.log(user, isAuthUser, 'Navbar');

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove('token');
    localStorage.clear();
    router.push('/');
  }

  const isAdminView = pathName.includes('admin-view');

  return (
    <>
      <nav className="bg-white fixed w-full  z-20 top-0 left-0 border-b border-gray-200 text-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            onClick={() => router.push('/')}
            className="flex items-center cursor-pointer"
          >
            {/* <Image src={logo} /> */}
            <img src="/images/logo.svg" className="w-10" />
            <p className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap">
              Orange<span className="text-orange-500">monkey</span>
            </p>
          </div>

          <NavItems router={router} isAdminView={isAdminView} />
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Conta
                </button>
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Carrinho
                </button>
              </Fragment>
            ) : null}
            {user?.role === 'admin' ? (
              isAdminView ? (
                <button
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  onClick={() => router.push('/')}
                >
                  Cliente
                </button>
              ) : (
                <button
                  onClick={() => router.push('/admin-view')}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Administrador
                </button>
              )
            ) : null}
            {isAuthUser ? (
              <button
                onClick={handleLogout}
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Sair
              </button>
            ) : (
              <button
                onClick={() => router.push('/login')}
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Login
              </button>
            )}
            {/* </div> */}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <CommonModal
        showModalTitle={false}
        mainContent={
          <NavItems
            router={router}
            isModalView={true}
            isAdminView={isAdminView}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
}
{
}
