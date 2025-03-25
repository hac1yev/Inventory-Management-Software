"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SelectInput from "@/components/FormInputs/SelectInput";
import { AddInventoryAdjustmentBranchs } from "@/dummy-data/data";
import { makeApiRequest } from "@/lib/makeApiRequest";

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
    const response = await makeApiRequest<FieldValues>(data, reset, 'post', '/api/addjustments/add');
    console.log(response);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Rederence Number"
          name="referenceNumber"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Date"
          name="date"
          type="date"
          register={register}
          errors={errors}
          className="w-full"
        />
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