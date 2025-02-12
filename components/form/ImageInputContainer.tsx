"use client";
import { actionFunction } from "@/utils/types";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <div className="my-8">
      {/* <Image
        src={image}
        alt={name}
        sizes="100vw"
        width={200}
        height={200}
        priority
        className="rounded object-cover mb-4"
      /> */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {props.children}
            <Image
              src={image}
              alt={name}
              sizes="100vw"
              width={200}
              height={200}
              priority
              className="rounded object-cover mb-4"
            />
            <ImageInput name={name} />
            <SubmitButton className="mt-3" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
