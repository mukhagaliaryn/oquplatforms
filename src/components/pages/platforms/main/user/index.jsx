import React from "react";
import Institution from "./institution";
import ProfileComponent from "./profile";
import CardProduct from "./products";


const MainComponent = (props) => {
    const { user, class_group, user_products, official_student } = props;

    return (
        <div className="container mx-auto my-5 md:my-10 px-5">
            {class_group &&
                <React.Fragment>
                    <Institution 
                        class_group={class_group} 
                        official_student={official_student} 
                        user={user}
                    />

                    <ProfileComponent 
                        user={user}
                        user_products={user_products}
                    />
                    
                    <CardProduct 
                        user_products={user_products} 
                    />
                </React.Fragment>
            }
        </div>
    )
}

export default MainComponent;