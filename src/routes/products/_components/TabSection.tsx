import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import BiddingHistoryTab from '@/routes/products/_components/BiddingHistoryTab';
import DescriptionTab from '@/routes/products/_components/DescriptionTab';
import SellerInfoTab from '@/routes/products/_components/SellerInfoTab';

export default function TabSection() {
  return (
    <Tabs defaultValue='description'>
      <TabsList className='w-full'>
        <TabsTrigger value='description'>상품 설명</TabsTrigger>
        <TabsTrigger value='biddingHistory'>입찰 내역</TabsTrigger>
        <TabsTrigger value='sellerInfo'>판매자 정보</TabsTrigger>
      </TabsList>
      <div className='border border-gray-500 rounded-lg p-4'>
        <TabsContent value='description'>
          <DescriptionTab />
        </TabsContent>
        <TabsContent value='biddingHistory'>
          <BiddingHistoryTab />
        </TabsContent>
        <TabsContent value='sellerInfo'>
          <SellerInfoTab />
        </TabsContent>
      </div>
    </Tabs>
  );
}
