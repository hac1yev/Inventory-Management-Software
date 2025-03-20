"use client";

import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import InventoryFormHeader from "@/components/dashboard/InventoryFormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import { Minus, Plus } from 'lucide-react';
import { useState } from "react";

const NewAdjustment = () => {
  const [activeForm,setActiveForm] = useState("add");

  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
      form: "add"
    },
    {
       title: "Transfer Stock",
       icon: Minus,
       form: "transfer"
    }
  ];

  return (
    <div>
      <InventoryFormHeader title="New Adjustment" href="/dashboard/inventory" />

      <div className="border-b border-gray-200 dark:border-gray-700 w-full max-w-6xl p-4 bg-white border mx-auto my-3">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {
            tabs.map((tab,i) => {
              const Icon = tab.icon;

              return (
                <li className="me-2" key={i} onClick={() => setActiveForm(tab.form)}>
                  <button
                    className={
                      activeForm === tab.form 
                        ? "inline-flex items-center justify-center gap-1 p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" 
                        : "inline-flex items-center justify-center gap-1 p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    }
                  >
                    <Icon className="w-5 h-5" />
                    {tab.title}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
      {activeForm === "add" ? (
        <AddInventoryForm />
      ) : (
        <TransferInventoryForm />
      )}
    </div>
  );
};

export default NewAdjustment;
