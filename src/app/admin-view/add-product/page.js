'use client';

import InputComponent from '@/components/FormElements/InputComponent';
import SelectComponent from '@/components/FormElements/SelectComponent';
import TileComponent from '@/components/FormElements/TileComponent';
import { TamanhosDisponiveis, adminProductFormControls } from '@/utils';

export default function AdminViewNewProduct() {
  function handleImage() {}
  return (
    <div className="w-full mt-5 mr-0 mb-0 ml-0 relative bg-white text-black">
      <div className="flex flex-col items-start p-10 bg-white shadow-2xl rounded-xl relative">
        <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          <input
            accept="image/*"
            max="1000000"
            type="file"
            onChange={handleImage}
          />

          <div className="flex gap-2 flex-col">
            <label>Tamanhos disponíveis</label>
            <TileComponent data={TamanhosDisponiveis} />
          </div>
          {adminProductFormControls.map((controlItem) =>
            controlItem.componentType === 'input' ? (
              <InputComponent
                key={controlItem.id}
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
              />
            ) : controlItem.componentType === 'select' ? (
              <SelectComponent
                key={controlItem.id}
                label={controlItem.label}
                options={controlItem.options}
              />
            ) : null,
          )}
          <button className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide">
            Adicionar Produto
          </button>
        </div>
      </div>
    </div>
  );
}
