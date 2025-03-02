"use client";

import InventoryFormHeader from "@/components/dashboard/InventoryFormHeader";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SelectInput from "@/components/FormInputs/SelectInput";
import { inventoryAdjustmentBranchs } from "@/dummy-data/data";

const NewAdjustment = () => {
  const [loading,setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('/api/adjustments', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        } 
      });
      const result = await response.json();
      console.log(result);
      reset();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };  

  return (
    <div>
      <InventoryFormHeader title="New Adjustment" href="/dashboard/inventory" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Enter Amount of Stock to Transfer"
            name="transferStockQty"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput 
            label="Select the Branch that will receive the Stock"
            name="receivingBranchId"
            register={register}
            errors={errors}
            className="w-full"
            options={inventoryAdjustmentBranchs}
          />
          <TextareaInput 
            register={register}
            errors={errors}
            name="notes"
            label="Adjustment Notes"
          />
        </div>
        <SubmitButton loading={loading} title={"Adjustment"} />
      </form>
    </div>
  );
};

export default NewAdjustment;