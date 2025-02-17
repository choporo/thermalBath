import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminPropertiesLists from "@/components/admin/AdminPropertiesLists";
import { fetchPropertiesAll } from "@/utils/action";

async function AdminPage({ params }: { params: { password: string } }) {
  const { password } = params;
  const adminPassword = process.env.NEXT_PUBLIC_WEBPAGE_PASSWORD;
  if (password !== adminPassword) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="flex font-bagel text-2xl text-center">넌 누군게냐?</h2>
      </div>
    );
  }

  const propertiesLength = await fetchPropertiesAll();

  return (
    <section>
      <div className="flex items-center gap-x-2">
        <h2 className="text-xl">온천 정보 관리</h2>
        <p className="text-sm"> 총 {propertiesLength}개</p>
      </div>
      <div className="my-2">
        <Tabs defaultValue="all" className="mx-auto">
          <TabsList className="justify-around w-full">
            <TabsTrigger value="all" className="text-xs">
              전체
            </TabsTrigger>
            <TabsTrigger value="seoul" className="text-xs">
              서울/인천
            </TabsTrigger>
            <TabsTrigger value="busan" className="text-xs">
              부산
            </TabsTrigger>
            <TabsTrigger value="daegu" className="text-xs">
              대구
            </TabsTrigger>
            <TabsTrigger value="gwangju" className="text-xs">
              광주/전남
            </TabsTrigger>
            <TabsTrigger value="daejeon" className="text-xs">
              대전/세종
            </TabsTrigger>
            <TabsTrigger value="ulsan" className="text-xs">
              울산
            </TabsTrigger>
            <TabsTrigger value="gyeonggi" className="text-xs">
              경기
            </TabsTrigger>
            <TabsTrigger value="gwangwon" className="text-xs">
              강원
            </TabsTrigger>
            <TabsTrigger value="chungnam" className="text-xs">
              충남
            </TabsTrigger>
            <TabsTrigger value="chungbuk" className="text-xs">
              충북
            </TabsTrigger>
            <TabsTrigger value="jeonbuk" className="text-xs">
              전북
            </TabsTrigger>
            <TabsTrigger value="gyeongnam" className="text-xs">
              경남
            </TabsTrigger>
            <TabsTrigger value="gyeongbuk" className="text-xs">
              경북
            </TabsTrigger>
            <TabsTrigger value="jeju" className="text-xs">
              제주
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <AdminPropertiesLists password={password} />
          </TabsContent>
          <TabsContent value="seoul">
            <AdminPropertiesLists category={"서울/인천"} password={password} />
          </TabsContent>
          <TabsContent value="busan">
            <AdminPropertiesLists category={"부산"} password={password} />
          </TabsContent>
          <TabsContent value="daegu">
            <AdminPropertiesLists category={"대구"} password={password} />
          </TabsContent>
          <TabsContent value="gwangju">
            <AdminPropertiesLists category={"광주/전남"} password={password} />
          </TabsContent>
          <TabsContent value="daejeon">
            <AdminPropertiesLists category={"대전/세종"} password={password} />
          </TabsContent>
          <TabsContent value="ulsan">
            <AdminPropertiesLists category={"울산"} password={password} />
          </TabsContent>
          <TabsContent value="gyeonggi">
            <AdminPropertiesLists category={"경기"} password={password} />
          </TabsContent>
          <TabsContent value="gwangwon">
            <AdminPropertiesLists category={"강원"} password={password} />
          </TabsContent>
          <TabsContent value="chungnam">
            <AdminPropertiesLists category={"충남"} password={password} />
          </TabsContent>
          <TabsContent value="chungbuk">
            <AdminPropertiesLists category={"충북"} password={password} />
          </TabsContent>
          <TabsContent value="jeonbuk">
            <AdminPropertiesLists category={"전북"} password={password} />
          </TabsContent>
          <TabsContent value="gyeongnam">
            <AdminPropertiesLists category={"경남"} password={password} />
          </TabsContent>
          <TabsContent value="gyeongbuk">
            <AdminPropertiesLists category={"경북"} password={password} />
          </TabsContent>
          <TabsContent value="jeju">
            <AdminPropertiesLists category={"제주"} password={password} />
          </TabsContent>
        </Tabs>
      </div>
      <Link href={`/admin/${password}/create`} passHref>
        <Button className="w-full mt-2" size={"lg"}>
          등록하기
        </Button>
      </Link>
    </section>
  );
}

export default AdminPage;
