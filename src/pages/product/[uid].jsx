import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "@/src/redux/actions/types";
import ProductDetailComponent from "@/src/components/pages/product/detail";
import ChaptersComponent from "@/src/components/pages/product/detail/chaptes";
import DescriptionComponent from "@/src/components/pages/product/detail/description";
import FeaturesComponent from "@/src/components/pages/product/detail/features";
import PurposeComponent from "@/src/components/pages/product/detail/purpose";
import MainLayout from "@/src/layouts/main";



const Product = ({ product, user_product, purposes, features, chapters, lessons, access }) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }
    
    return (
        <MainLayout
            title={product && product.name}
            content={product && product.description}
        >
            {(isAuthenticated && product) &&
                <React.Fragment>
                    {/* Detail */}
                    <ProductDetailComponent 
                        product={product}
                        user_product={user_product}
                        chapters={chapters}
                        access={access}
                    />

                    <div className="container mx-auto px-5 py-10 xl:flex">
                        <div className="flex-1 xl:mr-5">
                            
                            {/* Description */}
                            <DescriptionComponent product={product} />

                            {/* Purpose */}
                            <PurposeComponent purposes={purposes} />

                            {/* Chapters */}
                            <ChaptersComponent chapters={chapters} lessons={lessons} />
                        </div>
                        
                        {/* Features */}
                        <FeaturesComponent features={features} />
                    </div>
                </React.Fragment>
            }
        </MainLayout>
    )
}


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/`, context.req.cookies.access && config)
    const data = await res.json();
    const user_type = data.user_type || null
    const product = data.product || null;
    const user_product = data.user_product || null;
    const purposes = data.purposes || [];
    const features = data.features || [];
    const chapters = data.chapters || [];
    const lessons = data.lessons || [];

    const access = context.req.cookies.access || ""


    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
            user_product,
            purposes,
            features,
            chapters,
            lessons,
            access
        }
    }
}

export default Product;