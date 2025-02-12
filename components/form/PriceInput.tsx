import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type PriceInputProps = {
  defaultValue?: string;
};

function PriceInput({ defaultValue }: PriceInputProps) {
  const name = "fee";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        원 (₩)
      </Label>
      <Input
        id={name}
        type="text"
        name={name}
        min={0}
        defaultValue={defaultValue || `10,000`}
        required
      />
    </div>
  );
}

export default PriceInput;
