'use client';
import SelectComponent from '@/components/FormElements/SelectComponent';
import InputComponent from './../../components/FormElements/InputComponent/index';
import { controleFormCadastros } from '@/utils';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { registerNewUser } from '@/services/register';
import { GlobalContext } from '@/context';
import ComponentLevelLoader from '@/components/Loader/componentlevel';
import Notification from '@/components/Notification';
import { toast } from 'react-toastify';

const initialFormData = {
  nome: '',
  email: '',
  senha: '',
  role: 'cliente',
};

export default function Register() {
  const [formData, setFormData] = useState(initialFormData);
  const [registrado, setRegistrado] = useState(false);
  const { pageLevelLoader, setPageLevelLoader, isAuthUser } =
    useContext(GlobalContext);

  const router = useRouter();

  function formValid() {
    return formData &&
      formData.nome &&
      formData.nome.trim() !== '' &&
      formData.email &&
      formData.email.trim() !== '' &&
      formData.senha.length > 5 &&
      formData.senha &&
      formData.senha.trim() !== ''
      ? true
      : false;
  }

  // console.log(formValid());

  async function handleRegisterOnSubmit() {
    setPageLevelLoader(true);
    const data = await registerNewUser(formData);

    if (data.success) {
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRegistrado(true);
      setPageLevelLoader(false);
      setFormData(initialFormData);
    } else {
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPageLevelLoader(false);
      setFormData(initialFormData);
    }

    console.log(data);
  }

  useEffect(() => {
    if (isAuthUser) router.push('/');
  }, [isAuthUser]);

  return (
    <div className="bg-white text-black relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 xl:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center font-serif">
                {registrado
                  ? 'Registrado com Sucesso!!!'
                  : 'Inscreva-se Agora!'}
              </p>
              {registrado ? (
                <button
                  className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                  onClick={() => router.push('/login')}
                >
                  Login
                </button>
              ) : (
                <div className="w-full mt-6 mr-0 ml-0 mb-0 relative space-y-8">
                  {controleFormCadastros.map((item) =>
                    item.componentType === 'input' ? (
                      <InputComponent
                        key={item.id}
                        type={item.type}
                        placeholder={item.placeholder}
                        label={item.label}
                        onChange={(event) => {
                          setFormData({
                            ...formData,
                            [item.id]: event.target.value,
                          });
                        }}
                        value={formData[item.id]}
                      />
                    ) : item.componentType === 'select' ? (
                      <SelectComponent
                        key={item.id}
                        options={item.options}
                        label={item.label}
                        onChange={(event) => {
                          setFormData({
                            ...formData,
                            [item.id]: event.target.value,
                          });
                        }}
                        value={formData[item.id]}
                      />
                    ) : null,
                  )}
                  <button
                    className="disabled:opacity-60 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                    disabled={!formValid()}
                    onClick={handleRegisterOnSubmit}
                  >
                    {pageLevelLoader ? (
                      <ComponentLevelLoader
                        text={'Cadastrando'}
                        color={'#ffffff'}
                        loading={pageLevelLoader}
                      />
                    ) : (
                      'Cadastrar'
                    )}
                  </button>
                  <div className="flex flex-col gap-2">
                    <p>Já registrado?</p>
                    <button
                      className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                      onClick={() => router.push('/login')}
                    >
                      Quero fazer login
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
