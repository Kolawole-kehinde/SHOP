import * as React from "react"
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export function Dialog({ open, onClose, title, children }) {
  return (
    <Transition show={open} as={Fragment}>
      <HeadlessDialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessDialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all">
              <HeadlessDialog.Title className="text-lg font-medium text-gray-900 mb-4">
                {title}
              </HeadlessDialog.Title>
              <div>{children}</div>
              <div className="mt-6 text-right">
                <button
                  onClick={onClose}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800"
                >
                  Continue Shopping
                </button>
              </div>
            </HeadlessDialog.Panel>
          </Transition.Child>
        </div>
      </HeadlessDialog>
    </Transition>
  )
}
