const sql = require('mssql/msnodesqlv8');

const getAllCaptins = async (req, res) => {
    //console.log('Fetching all captains');
    let captins = await sql.query`
        SELECT * FROM CAPTIN 
    `
    captins = captins.recordset;
    //  console.log("captins: ", captins);
    return res.send(captins)
}

const availableCaptin = async (req, res) => {
      let availableCaptins = await sql.query`SELECT * FROM View_AvailableCaptains`
      //console.log("availableCaptins: ",availableCaptins)
      availableCaptins = availableCaptins.recordset;
      return res.send(availableCaptins);
}

const rightJoin = async (req, res) => {
     /* Means:
    Gather all rows with the same captain ID, name, and vehicle type.
    Count how many rides they have in that group.*/
    let captins = await sql.query`
        SELECT CAPTIN.FIRST_NAME, CAPTIN.CAPTIN_ID,VEHICLE.VEHICLE_TYPE,COUNT(RIDE.RIDE_ID) AS TOTAL_RIDES
        FROM CAPTIN
        RIGHT JOIN RIDE
        ON CAPTIN.CAPTIN_ID = RIDE.CAPTIN_ID
        LEFT JOIN VEHICLE
        ON CAPTIN.CAPTIN_ID = VEHICLE.CAPTIN_ID
        GROUP BY CAPTIN.FIRST_NAME, CAPTIN.CAPTIN_ID, VEHICLE.VEHICLE_TYPE;
    `
    
    //console.log("captins: ", captins);
    captins = captins.recordset;
 
    return res.status(200).json({captins})
}

module.exports = {
    getAllCaptins,
    rightJoin,
    availableCaptin
}