import { useCreateWishList, useDeleteWishList } from '@/api/wishlist';
import { Button } from '@/components/ui/button';
import { useParams } from '@tanstack/react-router';
import { LucideArrowLeft, LucideHeart, LucideShare } from 'lucide-react';

export default function DetailHeader({ isWishList }: { isWishList: boolean }) {
  const { id } = useParams({ from: '/products/$id' });
  const handleGoBack = () => {
    window.history.back();
  };

  const handleClickShare = () => {
    navigator.share({
      title: '아이폰 14 프로',
      text: '아이폰 14 프로 상품 디테일입니다.',
      url: 'https://www.google.com',
    });
  };

  const { mutate: createWishList } = useCreateWishList();
  const { mutate: deleteWishList } = useDeleteWishList();

  return (
    <div className='w-full flex justify-between items-center py-4 px-8 border-b border-gray-200 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950'>
      <div className='flex items-center gap-2'>
        <Button variant='ghost' className='p-0' onClick={handleGoBack}>
          <LucideArrowLeft />
          <span className='text-md text-gray-300'>돌아가기</span>
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          onClick={() =>
            isWishList
              ? deleteWishList({ auctionId: Number(id) })
              : createWishList({ auctionId: Number(id) })
          }
        >
          {isWishList ? (
            <LucideHeart fill='red' stroke='red' />
          ) : (
            <LucideHeart />
          )}
          관심
        </Button>
        <Button variant='outline' onClick={handleClickShare}>
          <LucideShare />
          공유하기
        </Button>
      </div>
    </div>
  );
}
