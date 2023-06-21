enum CarType {
    CARGO = 'cargo',
    PASSENGER = 'passenger',
    SPECIAL = 'special',
}

interface Car {
    id: number,
    driverName: string,
    phoneNumber: string,
    lattitude: number,
    longitude: number,
    type: CarType
}

export {
    CarType,
    Car
}