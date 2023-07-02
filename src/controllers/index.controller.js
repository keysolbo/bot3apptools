import {pool} from '../db.js'

export const index = (req, res) => res.json({ message: 'welcome to my api'})

export const ping = async(req, res) => {
    try {
        const [result] = await pool.query('select "pong" as result')
        res.json(result[0])            
    } catch (error) {
        return res.status(500).json({
            mnessage: error.message
        })
    }
}