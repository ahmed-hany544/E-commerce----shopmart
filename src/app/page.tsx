import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
        Welcome to ShopMart
      </h1>

      
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
        Discover the latest technology, fashion, and lifestyle products.
        Quality guaranteed with fast shipping and excellent customer service.
      </p>

      
      <div className="flex flex-col gap-4 sm:flex-row">
       <Link href={'/products'}> <Button 
          className="px-8 py-6 text-sm font-semibold"
        >
          Shop Now
        </Button>
       </Link>

       <Link href={'/categories'}> <Button
          variant="outline"
          className="px-8 py-6 text-sm font-semibold border-black text-black hover:bg-black hover:text-white"
        >
          Browse Categories
        </Button></Link>
      </div>
    </section>
    </>
  );
}
