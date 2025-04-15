export const USER_ROUTE = "/users";

const ROUTE_PATHS = {
    HOME: "/",
    SIGN_IN: "/signin",
    
    // home page then splits into product categories
    MOUSE_PRODUCTS: "/mice",
    MOUSE_PIECES: "/parts",
    DEV: "/developer",

    // payment pathway
    // CART: "/cart",
    // CHECKOUT: "/checkout",

    // user order information
    USER_DASHBOARD: "/:userId/dashboard",
    // TRACK_ORDER: "/track-order", //idk if this is a necessary page, prob just nest within the dashboard page later
    // MY_ORDERS: "/my-orders",
}

export default ROUTE_PATHS;