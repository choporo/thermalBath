"use client";
import React, { useEffect, useState } from "react";
import FormContainer from "../form/FormContainer";
import { IconButton } from "../form/Buttons";
import { deletePropertyAction, fetchAdminProperties } from "@/utils/action";
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
import { AdminProps } from "@/utils/types";
import PaginationSection from "../properties/PaginationSection";

function AdminPropertiesLists({
  password,
  category,
}: {
  password: string;
  category?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [posts, setPosts] = useState<AdminProps[]>([]);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = posts.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    const fetchData = async () => {
      const properties: AdminProps[] = await fetchAdminProperties({ category });
      setPosts(properties);
    };
    fetchData();
  }, []);

  if (posts.length === 0) {
    return <EmptyList />;
  }

  return (
    <div>
      <Table className="text-sm">
        <TableCaption className="text-start">
          총 &nbsp;{posts.length} 개
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">업소명</TableHead>
            <TableHead className="text-center">수정/삭제</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((property, index) => {
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
      <div className="my-5">
        <PaginationSection
          totalItems={posts.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
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
