const config= {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "Jesugbogo2003",
    mongoUri: process.env.MONGODB_URI || 
        process.env.MONGO_HOST ||
        "mongodb+srv://cluster10695.eectvd2.mongodb.net"
    
}
export default config
