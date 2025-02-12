import React from "react";
import FormContainer from "../form/FormContainer";
import { IconButton } from "../form/Buttons";
import { deletePropertyAction, fetchProperties } from "@/utils/action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import EmptyList from "../home/EmptyList";

async function AdminPropertiesLists({
  password,
  category,
}: {
  password: string;
  category: string;
}) {
  const properties = await fetchProperties({ category });

  if (properties.length === 0) {
    return <EmptyList />;
  }

  return (
    <div>
      <Table className="text-sm">
        <TableCaption className="text-start">
          총 &nbsp;{properties.length} 개
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">업소명</TableHead>
            <TableHead className="text-center">수정/삭제</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property, index) => {
            const { id: propertyId, name } = property;
            return (
              <TableRow key={index} className="text-center">
                <TableCell>{name}</TableCell>
                <TableCell className="flex items-center justify-center">
                  <Link href={`${password}/${propertyId}/edit`} passHref>
                    <IconButton actionType="edit"></IconButton>
                  </Link>
                  <DeleteProperty propertyId={propertyId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminPropertiesLists;

function DeleteProperty({ propertyId }: { propertyId: string }) {
  const deleteProduct = deletePropertyAction.bind(null, { propertyId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
