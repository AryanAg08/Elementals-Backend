const {Router} = require("express")
const userRouter = Router();

const EndUser = [
    {
        "name": "Akansh",
        "email":"AkanshMittal125@gmail.com",
        "userID": "23456543",
        "AadharID": "48759303274",
        "Mobile": "9345290876",
    },
     {
        "name": "Raghav",
        "email":"RaghavGoel69@gmail.com",
        "userID": "345656543",
        "AadharID": "98859303274",
        "Mobile": "9995690876",
     },
     {
        "name": "Isha",
        "email":"Isha12Singh@gmail.com",
        "userID": "99986543",
        "AadharID": "78390303274",
        "Mobile": "8223290876",
     }
];

const Factories = [
    {
        "ZipCode": "247667",
        "State": "Uttrakhand",
        "District": "haridwar",
        "City": "roorkee",
        "Mobileno": "+1800-102-9882",
        "Name": "Attero", 
        "Location": "K no. 173, Raipur Industrial Area, Bhagwanpur,",
        "Photo": "https://attero.in/wp-content/themes/attero/assets/images/global/logos/logoColor.png"
    },
    {
        "ZipCode": "302010",
        "State": "Uttar Pradesh",
        "District": "Noida",
        "City": "Noida",
        "Mobileno": "+91-9899708767",
        "Name": "GreenAura Recycling", 
        "Location": "H - 187, Lohiya Road, H Block, Sector - 63, Noida, UP",
        "Photo": "http://www.greenaurarecycling.in/images/green.png"
    },
    {
        "ZipCode": "302010",
        "State": "Uttar Pradesh",
        "District": "Gaziabad",
        "City": "Gaziabad",
        "Mobileno": "+91-8826937129",
        "Name": "ThermoWaste Solutions", 
        "Location": "C-2, Site-2, Loni Road Industrial Area, Mohan Nagar, Ghaziabad, Uttar Pradesh",
        "Photo": "https://www.thermowastesolutions.com/"
    }
]

userRouter.get("/admin", async (req, res) => {
    res.send("This is admin page");
  });

module.exports = {userRouter};
