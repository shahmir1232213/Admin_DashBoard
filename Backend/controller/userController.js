const sql = require('mssql/msnodesqlv8');

const getAllUsers = async (req, res) => {
    //console.log('Fetching all captains');
    let users = await sql.query`
        SELECT * FROM USERS 
    `
   // console.log("users: ", users);
    users = users.recordset;
    return res.status(200).json({users})
}

const leftJoin  = async (req, res) => {
    //console.log('Fetching all captains');
    let users = await sql.query`
        SELECT USERS.FIRST_NAME, USERS.USER_ID, RIDE.RIDE_ID , RIDE.DESTINATION, RIDE.PICKUP
        FROM USERS
        LEFT JOIN RIDE
        ON USERS.USER_ID = RIDE.USER_ID
    `
    console.log("users: ", users);
    users = users.recordset;
    return res.status(200).json({users})
}

const innerJoin  = async (req, res) => {
    //console.log('Fetching all captains');
    let users = await sql.query`
       SELECT 
            USERS.USER_ID,
            USERS.FIRST_NAME,
            COUNT(RIDE.RIDE_ID) AS TOTAL_RIDES
            FROM USERS 
            INNER JOIN RIDE ON USERS.USER_ID = RIDE.USER_ID
            GROUP BY USERS.USER_ID, USERS.FIRST_NAME;
    `
    users = users.recordset;
    console.log("users: ", users);
    
    return res.status(200).json({users})
}

module.exports = {
    getAllUsers,
    leftJoin,
    innerJoin
}