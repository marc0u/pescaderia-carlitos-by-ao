import { useRouter } from "next/router";
import ProductContainer from "../../containers/product";
import MainLayout from "../../layouts/main";

export default function Item() {
  return (
    <MainLayout>
      <ProductContainer />
    </MainLayout>
  );
}
