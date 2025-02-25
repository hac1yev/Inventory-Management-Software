import { InventoryOptionType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const OptionCard = ({ optionData }: InventoryOptionType) => {
  const { title, description, link, linkTitle, enabled, imageUrl } = optionData;

  return (
    <div className="shadow-md rounded-md bg-white flex flex-col items-center justify-center gap-4 p-8 hover:shadow-xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div>
        <Image
          src={imageUrl}
          alt="items-group"
          width={100}
          height={100}
        />
      </div>
      <p className="line-clamp-1">{description}</p>
      {enabled ? (
        <Link
          href={link}
          className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80"
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
          Enable
        </button>
      )}
    </div>
  );
};

export default OptionCard;
