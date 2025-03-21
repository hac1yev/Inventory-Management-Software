"use client";

import InventoryFormHeader from "@/components/dashboard/InventoryFormHeader";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const NewBrand = () => {
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
      const response = await axios.post('/api/brands', JSON.stringify(data), {
        headers: {
          "Content-type": "application/json"
        } 
      });
      console.log(response);
      toast.success("New Brand Created Successfully!");
      reset();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };  

  return (
    <div>
      <InventoryFormHeader title="New Brand" href="/dashboard/inventory" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Brand Title"
            name="title"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton loading={loading} title={"Brand"} />
      </form>
    </div>
  );
};

export default NewBrand;