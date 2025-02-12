import * as z from "zod";
import { ZodSchema } from "zod";

export const PropertySchema = {};

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(", "));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFilesTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "이미지 크기는 1MB 이하로...")
    .refine((file) => {
      return (
        !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
      );
    }, "이미지 파일만 업로드 가능혀~!");
}

export const propertySchema = z.object({
  name: z.string().min(2),
  category: z.string(),
  address: z.string(),
  feature: z.string(),
  hours: z.string(),
  rating: z.string(),
  parking: z.string(),
  amenity: z.string(),
  temperature: z.string(),
  phone: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  fee: z.string(),
  baths: z.coerce.number().int().min(0),
  openAirBaths: z.coerce.number().int().min(0),
  sauna: z.coerce.number().int().min(0),
});
