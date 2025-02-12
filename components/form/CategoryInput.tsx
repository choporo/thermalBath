import { categories } from "@/utils/categories";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const name = "category";

function CategoryInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>지역</Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        required
        name={name}
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category, index) => {
            return (
              <SelectItem key={index} value={category.label}>
                <span className="flex text-center gap-2">{category.label}</span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryInput;
