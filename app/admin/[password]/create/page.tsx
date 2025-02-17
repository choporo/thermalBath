import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import CounterInput from "@/components/form/CounterInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import { createPropertyAction } from "@/utils/action";
import React from "react";

function CreatePropertyPage() {
  // const { password } = params;
  // const adminPassword = process.env.NEXT_PUBLIC_WEBPAGE_PASSWORD;
  // if (password !== adminPassword) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <h2 className="flex font-bagel text-2xl text-center">넌 누군게냐?</h2>
  //     </div>
  //   );
  // }
  return (
    <section>
      <h1 className="text-3xl font-bagel mb-8 capitalize">온천 등록하기</h1>
      <div className="border p-8 rounded">
        <h3 className="text-2xl mb-4 font-bagel">정보 입력해</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid lg:grid-cols-3 gap-8 mb-4">
            <FormInput name="name" type="text" label="상호명" />
            <FormInput name="address" type="text" label="업체주소" />
            <FormInput name="parking" type="text" label="주차여부" />
            <FormInput name="hours" type="text" label="운영시간" />
            <FormInput name="phone" type="text" label="업체 연락처" />
            <FormInput name="rating" type="text" label="방문자 리뷰 수" />
            <FormInput name="feature" type="text" label="온천수 설명" />
            <FormInput
              name="temperature"
              type="text"
              label="온천수 최고온도"
              defaultValue="지하"
            />
            <FormInput name="amenity" type="text" label="온천 부대시설 등" />
            <FormInput name="latitude" type="text" label="위도" />
            <FormInput name="longitude" type="text" label="경도" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <CategoryInput />
            <PriceInput />
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <ImageInput name="image" />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">탕/사우나 개수</h3>
          <CounterInput detail="baths" />
          <CounterInput detail="sauna" />
          <CounterInput detail="openAirBaths" />
          <SubmitButton text="등록하기" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
