"use client";

import InventoryFormHeader from "@/components/dashboard/InventoryFormHeader";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import axios from 'axios';
import { useState } from "react";
import toast from "react-hot-toast";

const NewCategory = () => {
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
      const response = await axios.post('/api/categories', JSON.stringify(data), {
        headers: {
          "Content-type": "application/json"
        } 
      });
      console.log(response);
      toast.success('New Category Created SuccessFully!');
      reset();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };  

  return (
    <div>
      <InventoryFormHeader title="New Category" href="/dashboard/inventory" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput 
            register={register}
            errors={errors}
            name="description"
            label="Category Description"
          />
        </div>
        <SubmitButton loading={loading} title={"Category"} />
      </form>
    </div>
  );
};

export default NewCategory;
