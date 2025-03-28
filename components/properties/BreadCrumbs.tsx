import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadCrumbs({
  category,
  name,
  classname,
}: {
  category: string;
  name: string;
  classname?: string;
}) {
  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbList className={`${classname}`}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">온천갈지도</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/?category=${category}`}>
            {category}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-foreground">
            {name.split("(")[1] ? name.split("(")[0] : name}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadCrumbs;
