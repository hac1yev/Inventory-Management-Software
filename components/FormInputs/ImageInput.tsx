import { UploadDropzone } from "@/lib/uploadthing";
import { ImageInputType } from "@/types";
import { Pencil } from "lucide-react";
import Image from "next/image";

const ImageInput = ({ label,imageUrl,setImageUrl }: ImageInputType) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              {label}
            </label>
            {!imageUrl && <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].ufsUrl);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />}
            {imageUrl && (
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex justify-end">
                  <button onClick={() => setImageUrl("")} className=" flex items-center gap-1 bg-primary p-2 cursor-pointer hover:bg-slate-800 text-slate-50 font-medium rounded-lg text-sm px-5 py-2 ">
                    <Pencil className="w-4 h-4" />
                    Change Image
                  </button>
                </div>
                <Image 
                  src={imageUrl}
                  alt="item-picture"
                  width={500}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            )}
        </div>
    );
};

export default ImageInput;