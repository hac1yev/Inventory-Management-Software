"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SelectInput from "@/components/FormInputs/SelectInput";
import { AddInventoryAdjustmentBranchs } from "@/dummy-data/data";

const AddInventoryForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/adjustments/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Enter Quantity of Stock to Add"
          name="addStockQty"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select the Warehouse that will receive the Stock"
          name="recievingWarehouseId"
          register={register}
          errors={errors}
          className="w-full"
          options={AddInventoryAdjustmentBranchs}
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
  );
};

export default AddInventoryForm;