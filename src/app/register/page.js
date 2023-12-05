'use client';
import SelectComponent from '@/components/FormElements/SelectComponent';
import InputComponent from './../../components/FormElements/InputComponent/index';
import { controleFormCadastros } from '@/utils';
import { useRouter } from 'next/navigation';

const registrado = false;

export default function Register() {
  const router = useRouter();

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
                <button className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
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
                      />
                    ) : item.componentType === 'select' ? (
                      <SelectComponent
                        key={item.id}
                        options={item.options}
                        label={item.label}
                      />
                    ) : null,
                  )}
                  <button className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
                    Inscrever
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
    </div>
  );
}
