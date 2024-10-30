"use client";
import { Button } from "@/components/ui/button";
import ProductCard from "./components/productCard";
import { Plus } from "lucide-react";
import useStore from "./store/main-store";
import AddProducts from "./components/AddProducts";
import PageTransitionLayout from "./components/AnimatePage";

export default function Home() {
  const { createModal, toggleModal, product } = useStore();
  return (
    <PageTransitionLayout>
      <div className="w-full flex items-center flex-col py-10">
        <h2 className="text-4xl font-semibold tracking-tighter">
          All Products
        </h2>
        <div>
          <Button className="my-4" onClick={toggleModal}>
            <Plus /> Add new Product
          </Button>
        </div>
        <div className="flex w-full justify-center flex-wrap gap-3 py-7">
          {product.map((items) => (
            <ProductCard key={items?.name} items={items} />
          ))}
        </div>
        {createModal ? (
          <AddProducts onClose={toggleModal} open={createModal} />
        ) : null}
      </div>
    </PageTransitionLayout>
  );
}
