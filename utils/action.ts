"use server";

import { imageSchema, propertySchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message:
      error instanceof Error
        ? error.message
        : "나도 모르는 오류가 발생했다네...?",
  };
};

export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const adminPassword = process.env.NEXT_PUBLIC_WEBPAGE_PASSWORD;
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedFields = validateWithZodSchema(propertySchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.property.create({
      data: {
        ...validatedFields,
        image: fullPath,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect(`/admin/${adminPassword}/`);
};

export const fetchPropertiesAll = async () =>{
  const protertiesAll = await db.property.findMany({
    select:{
      id:true,
      name: true
    }
  })

  return protertiesAll.length
}

export const fetchPropertiesRss = async () =>{
  const protertiesAll = await db.property.findMany(
    {select:{
      id:true,
      name: true,
      feature: true,
      updateAt: true
    }}
  )

  return protertiesAll
}

export const fetchPropertiesSitemap = async () =>{
  const protertiesSitemap = await db.property.findMany({
    select:{
      id:true,
      updateAt: true
    }
  })

  return protertiesSitemap
}

export const fetchProperties = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { address: { contains: search, mode: "insensitive" } },
        { feature: { contains: search, mode: "insensitive" } },
        { amenity: { contains: search, mode: "insensitive" } },
        { temperature: { contains: search, mode: "insensitive" } },
        { fee: { contains: search, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      name: true,
      address: true,
      rating: true,
      fee: true,
      image: true,
      parking: true,
      baths: true, 
      openAirBaths: true, 
      sauna: true
    },
    orderBy: {
     baths: "asc"
    },
    
  });
  return properties;
};

export const fetchPropertyDetails = (id:string) => {
  return db.property.findUnique({
    where:{
      id
    },
  })
} 


export const updatePropertyImageAction1 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {

  const propertyId = formData.get('id') as string
  const oldImageUrl = formData.get('url') as string
  const adminPassword = process.env.NEXT_PUBLIC_WEBPAGE_PASSWORD;

  try{
    const file = formData.get('image') as File
    const validatedFile = validateWithZodSchema(imageSchema, {image: file})
    const fullPath = await uploadImage(validatedFile.image)

    await deleteImage(oldImageUrl)

    await db.property.update({
      where:{
        id: propertyId
      },
      data:{
        image:fullPath
      }
    })
    revalidatePath(`admin/${adminPassword}/${propertyId}/edit`)
    return {message:"업로드 완료"}
  }catch(error){
    return renderError(error)
  }
}

export const updatePropertyAction = async (prevState: any, formData: FormData) => {
  const adminPassword = process.env.NEXT_PUBLIC_WEBPAGE_PASSWORD;
  try {
    const propertyId = formData.get('id') as string
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(propertySchema, rawData)

    await db.property.update({
      where: {
        id:propertyId
      },
      data:{
        ...validatedFields
      }
    }),
    revalidatePath(`admin/${adminPassword}/${propertyId}/edit`)
  }catch(error){
    return renderError(error)
  }
  redirect(`/admin/${adminPassword}/`)
}


export const deletePropertyAction = async(prevState:{
  propertyId:string
}) => {
  const {propertyId} = prevState
  
  try{
    const property = await db.property.delete({
      where:{
        id:propertyId
      }
    })
    await deleteImage(property.image)
    revalidatePath('/admin')
    return{message:"삭제완료"}
  } catch(error){
    return renderError(error)
  }
}