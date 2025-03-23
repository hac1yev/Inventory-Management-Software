"use client";

import InventoryFormHeader from "@/components/dashboard/InventoryFormHeader";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useEffect, useState } from "react";
import axios from "axios";

const NewSupplier = () => {
  const [loading,setLoading] = useState(false);
  const [warehouseSelectOptions,setWarehouseSelectOptions] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    (async function() {
      try {
        const response = await axios.get("/api/warehouse/types");
        setWarehouseSelectOptions(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {    
    setLoading(true);    
    try {
      const response = await axios.post('/api/supplier', JSON.stringify(data), {
        headers: {
          "Content-type": "application/json"
        } 
      });
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };  

  return (
    <div>
      <InventoryFormHeader title="New Supplier" href="/dashboard/inventory" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Supplier Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Supplier Address"
            name="address"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput 
            register={register}
            errors={errors}
            name="paymentTerms"
            label="Supplier Payment terms"
          />
          <TextareaInput 
            register={register}
            errors={errors}
            name="notes"
            label="Notes"
          />
        </div>
        <SubmitButton loading={loading} title={"Supplier"} />
      </form>
    </div>
  );
};

export default NewSupplier;