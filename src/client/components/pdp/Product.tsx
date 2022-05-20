import { useParams } from "react-router";
import { DataFetchItemProduct } from "../../types/item-product";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import { ProductScreen } from "./ProductScreen";
import { DescriptionScreen } from "./DescriptionScreen";


export const Product = () => {
    const params = useParams()
    const { data, loading }: DataFetchItemProduct = useFetchProduct(`/api/items/${params.id}`, params.id)

    return (
        <>
            <Breadcrumb breadName={data.categories} />

            {
                loading && <div>Loading..</div>
            }

            <section className="pdp">

                <div className="pdp__column-left">
                    <div className="pdp__column-left--picture">
                        <img src={data?.picture} alt={data?.item?.title} width="680" height="600" />
                    </div>
                    <div className="pdp__column-left--description">
                        <DescriptionScreen description={data.description} />
                    </div>
                </div>

                <div className="pdp__column-right">
                    <ProductScreen {...data} />
                </div>

            </section>
        </>
    )
}
