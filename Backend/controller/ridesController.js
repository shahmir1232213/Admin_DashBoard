const sql = require('mssql/msnodesqlv8');

const getAllRides = async (req, res) => {
    //console.log('Fetching all captains');
    let rides = await sql.query`
        SELECT * FROM RIDE 
    `
   // console.log("rides: ", rides);
    rides = rides.recordset;
    res.send(rides)
}
module.exports = {
    getAllRides
}