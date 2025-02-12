import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import CounterInput from "@/components/form/CounterInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import PriceInput from "@/components/form/PriceInput";
import {
  fetchPropertyDetails,
  updatePropertyAction,
  updatePropertyImageAction1,
} from "@/utils/action";
import { redirect } from "next/navigation";

import React from "react";

async function EditPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const property = await fetchPropertyDetails(id);
  if (!property) redirect("/");
  const {
    category,
    address,
    feature,
    name,
    hours,
    parking,
    fee,
    rating,
    baths,
    openAirBaths,
    sauna,
    image,
    amenity,
    latitude,
    longitude,
    phone,
    temperature,
  } = property;

  return (
    <section className="border rounded-lg p-2">
      <div className="p-8">
        <h1 className="text-2xl font-bagel tracking-widest text-center mb-10">
          {name} 정보 수정
        </h1>
        <FormContainer action={updatePropertyAction}>
          <div className="grid grid-cols-3 gap-4 mb-10">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="상호명"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="address"
              label="주소"
              defaultValue={address}
            />
            <FormInput
              type="text"
              name="phone"
              label="연락처"
              defaultValue={phone}
            />
            <FormInput
              type="text"
              name="rating"
              label="방문자 리뷰"
              defaultValue={rating}
            />
            <FormInput
              type="text"
              name="parking"
              label="주차가능"
              defaultValue={parking}
            />
            <FormInput
              type="text"
              name="hours"
              label="운영시간"
              defaultValue={hours}
            />
            <FormInput
              type="text"
              name="feature"
              label="온천수 특징"
              defaultValue={feature}
            />
            <FormInput
              type="text"
              name="temperature"
              label="온천수 온도"
              defaultValue={temperature}
            />
            <FormInput
              type="text"
              name="amenity"
              label="부대시설"
              defaultValue={amenity}
            />
            <FormInput
              type="text"
              name="latitude"
              label="위도"
              defaultValue={latitude}
            />
            <FormInput
              type="text"
              name="longitude"
              label="경도"
              defaultValue={longitude}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-5 mb-10">
            <CategoryInput defaultValue={category} />
            <PriceInput defaultValue={fee} />
          </div>
          <CounterInput detail="baths" defaultValue={baths} />
          <CounterInput detail="openAirBaths" defaultValue={openAirBaths} />
          <CounterInput detail="sauna" defaultValue={sauna} />
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
        <ImageInputContainer
          action={updatePropertyImageAction1}
          name="image"
          image={image}
          text="이미지 수정"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={image} />
        </ImageInputContainer>
      </div>
    </section>
  );
}

export default EditPage;
