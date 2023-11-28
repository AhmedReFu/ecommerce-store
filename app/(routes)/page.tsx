import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/continer";


export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard(
      "668b5263-bacf-4c1f-8beb-aa78f642d475"
    );
    const products = await getProducts({ isFeatured: true });

    return (
      <Container>
        <div className="space-y-10 pb-10 bg-bkg">
          <Billboard data={billboard} />

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Product" items={products} />
          </div>
        </div>
        
      </Container>
    );
}

export default HomePage;