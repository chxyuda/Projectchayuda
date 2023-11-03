module.exports = ( sequelize, DataTypes ) => {
    const Officer = sequelize.define('Officer', {
        name: DataTypes.STRING, 
        rank: DataTypes.STRING, 
        address: DataTypes.STRING,        
        telephone: DataTypes.STRING,  
    })
    return Officer
}