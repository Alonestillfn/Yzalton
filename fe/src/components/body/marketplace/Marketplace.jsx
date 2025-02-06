import MarketplaceLeft from "./MarketplaceLeft"
import MarketplaceRight from "./MarketplaceRight"

function Marketplace(){
    return (
        <div className="grid grid-cols-[23%_77%] bg-[#1c1c1d]">
            <MarketplaceLeft></MarketplaceLeft>
            <MarketplaceRight></MarketplaceRight>
        </div>
    )
}

export default Marketplace