"use client";

import InventoryFormHeader from "@/components/dashboard/InventoryFormHeader";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useState } from "react";
import SelectInput from "@/components/FormInputs/SelectInput";
import { inventoryItemBrands, inventoryItemCategories, inventoryItemSuplier, inventoryItemUnits, inventoryItemWarehouse } from "@/dummy-data/data";
import ImageInput from "@/components/FormInputs/ImageInput";

const NewItem = () => {
  const [loading,setLoading] = useState(false);
  const [imageUrl,setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({ ...data,imageUrl }),
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
      <InventoryFormHeader title="New Item" href="/dashboard/inventory" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
          />
          <SelectInput 
            label="Select the Item Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={inventoryItemCategories}
          />
          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            // isRequired={false}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput 
            label="Select the Item Unit"
            name="unitId"
            register={register}
            errors={errors}
            className="w-full"
            options={inventoryItemUnits}
          />
          <SelectInput 
            label="Select the Item Brand"
            name="brandId"
            register={register}
            errors={errors}
            className="w-full"
            options={inventoryItemBrands}
          />
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Selling Price"
            name="sellingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput 
            label="Select the Item Suplier"
            name="suplierId"
            register={register}
            errors={errors}
            className="w-full"
            options={inventoryItemSuplier}
          />
          <TextInput
            label="Re-Order Point"
            name="reOrderPoint"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput 
            label="Select the Item Warehouse"
            name="warehouseId"
            register={register}
            errors={errors}
            className="w-full"
            options={inventoryItemWarehouse}
          />
          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Item Dimensions in cm (20 x 30 x 100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Tax in %"
            name="taxRate"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextareaInput 
            register={register}
            errors={errors}
            name="description"
            label="Item Description"
          />
          <TextareaInput 
            register={register}
            errors={errors}
            name="notes"
            label="Item Notes"
          />
          <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <SubmitButton loading={loading} title={"Item"} />
      </form>
    </div>
  );
};

export default NewItem;