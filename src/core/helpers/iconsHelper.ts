import { CarType } from "../../types/cars"

class IconsHelper {
    getImageByCarType = (carType: string) => {
        switch (carType) {
            case CarType.CARGO:
                return require('../../../assets/cargo-car.png')
            case CarType.PASSENGER:
                return require('../../../assets/passenger-car.png')
            case CarType.SPECIAL:
                return require('../../../assets/special-car.png')
            default:
                return require('../../../assets/default-car.png')
        }
    }
}

export default new IconsHelper()