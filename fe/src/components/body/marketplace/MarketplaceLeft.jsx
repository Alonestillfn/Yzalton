
function MarketplaceLeft(){
    const marketplaceDetail = ["Browse all", "Notifications", "Inbox", "Buying", "Selling"]
    const marketplaceIcon = [
        "fa-solid fa-shop", 
        "fa-solid fa-bell", 
        "fa-solid fa-inbox",
        "fa-solid fa-bag-shopping", 
        "fa-solid fa-tags",
    ]
    const categories = [
        "Vehicle", "Property rentals", "Apparel",
        "Classifieds", "Electronics", "Entertainment",
        "Family", "Free stuff", "Garden & outdoor",
        "Hobbies", "Home goods", "Home improment supplies",
        "Home sales", "Musical instruments",
        "Offic supplies", "Pet supplies", "Sporting goods",
        "Toys & games", "Buy and sell groups"
    ]
    const categoriesIcon = [
        "fa-solid fa-car",
        "fa-solid fa-coins",
        "fa-solid fa-shirt",
        "fa-solid fa-tag",
        "fa-solid fa-mobile-screen-button",
        "fa-solid fa-clapperboard",
        "fa-solid fa-heart",
        "fa-solid fa-tags",
        "fa-solid fa-person-hiking",
        "fa-solid fa-brush",
        "fa-solid fa-house-chimney",
        "fa-solid fa-wrench",
        "fa-solid fa-house",
        "fa-solid fa-guitar",
        "fa-solid fa-tags",
        "fa-solid fa-paw",
        "fa-solid fa-medal",
        "fa-solid fa-gamepad",
        "fa-solid fa-user-group",
    ]

    return (
        <div className="bg-[#252728]">
            <div className="fixed mt-[4.5%] max-h-[92vh] pb-10 overflow-auto scrollbar-hide bg-[#252728] top-0 left-0 right-[77%] pl-4 pr-2">
                <div className="flex items-center justify-between text-2xl py-1">
                    <div className="font-bold">Marketplace</div>
                    <div className="px-2 rounded-full bg-[#333334] hover:opacity-80 hover:cursor-pointer">
                        <i className="fa-solid fa-gear text-xl"></i>
                    </div>
                </div>
                <div className="flex grow  max-w-[95%] my-1.5 items-center bg-[#333334] text-gray-300 rounded">
                    <i className="fa-solid fa-magnifying-glass p-2"></i>
                    <input className="h-9 w-full focus:text-white outline-none" type="text" placeholder="Search marketplace"/>
                </div>
                
                <div className="ml-1 font-semibold text-lg border-b border-[#65686c] pb-1.5">
                    {
                        marketplaceDetail.map((item, index) => (
                            <div key={index} className="flex justify-between pl-3 p-4 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                                <div>
                                    <i className={`${marketplaceIcon[index]} mr-2 text-xl`}></i>
                                    {item}
                                </div>
                                <div className="text-xl">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="text-xl font-bold mt-2 mb-1">
                    Categories
                </div>
                <div className="ml-1 font-semibold text-lg">
                    {
                        categories.map((item, index) => (
                            <div key={index} className="flex justify-between pl-3 p-4 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                                <div>
                                    <i className={`${categoriesIcon[index]} mr-2 text-xl`}></i>
                                    {item}
                                </div>
                                <div className="text-xl">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            
        </div>
    )
}

export default MarketplaceLeft