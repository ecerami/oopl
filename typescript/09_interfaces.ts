
/**
 * Example of an Interface with Only Properties.
 */
interface House {
    numBedRooms: number;
    numBathRooms: number;
    zipCode: string;
    salePrice: number;
}

let house0: House = {
    numBedRooms: 2,
    numBathRooms: 1,
    zipCode: "10021",
    salePrice: 1000000
}
console.log(house0.zipCode)

