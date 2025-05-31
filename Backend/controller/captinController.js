const sql = require('mssql/msnodesqlv8');

const getAllCaptins = async (req, res) => {
    //console.log('Fetching all captains');
    let captins = await sql.query`
        SELECT * FROM CAPTIN 
    `
    captins = captins.recordset[0]
    res.send(captins)
}
module.exports = {
    getAllCaptins
}