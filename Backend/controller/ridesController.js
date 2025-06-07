const sql = require('mssql/msnodesqlv8');

const getAllRides = async (req, res) => {
    //console.log('Fetching all captains');
    let rides = await sql.query`
        SELECT * FROM RIDE 
    `
    
    rides = rides.recordset;
    console.log("rides: ", rides);
    res.send(rides)
}
module.exports = {
    getAllRides
}