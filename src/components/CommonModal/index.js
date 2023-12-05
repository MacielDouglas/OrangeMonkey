// modal
'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function CommonModal({
  modalTitle,
  mainContent,
  showButtons,
  buttonComponent,
  show,
  setShow,
  showModalTitle,
}) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => setShow(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Dialog.Panel className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-900"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-screen max-w-md flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                {showModalTitle !== false && (
                  <div className="flex items-start justify-between">
                    <Dialog.Title>{modalTitle}</Dialog.Title>
                  </div>
                )}
                <div className="mt-20">
                  {mainContent}
                  {/* Adicione um botão focável */}
                  <button className="hidden" onFocus={() => {}} />
                </div>
              </div>
              {showButtons && (
                <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
                  {buttonComponent}
                </div>
              )}
            </div>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
