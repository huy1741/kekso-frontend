export default interface orderInterface {
    ShipAddress: string;
    ShipCity: string;
    ShipRegion: string,
    ShipPostalCode: string,
    ShipCountry: string,
    ContactName: string,
    OrderID: number,
    ShippedDate: string | null
    ProductList: Product[],

}
interface Product {
    ProductName: string
}