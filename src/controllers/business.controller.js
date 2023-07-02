import {pool} from '../db.js'

export const getBusinesses = async(req, res) => {
    try {
        const [rows] = await pool.query('select * from bot3app_control.business order by business_id desc')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            mnessage: error.message
        })
    }
}

export const getBusiness = async(req, res) => {
    try {
        const {id} = req.params
        const [rows] = await pool.query('select * from bot3app_control.business where business_id = ?' , [id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Business not found'
        })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            mnessage: error.message
        })
    }
}
//
export const createBusiness = async(req, res) => {
    try {
        const { name, description, type, contact_name, contact_phone, contact_web, contact_email, image_href, keyword, location_href } = req.body
        const [rows] = await pool.query(
            'insert into bot3app_control.business(name, description, type, contact_name, contact_phone, contact_web, contact_email, image_href, keyword, location_href) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)' , 
            [name, description, type, contact_name, contact_phone, contact_web, contact_email, image_href, keyword, location_href])

        res.status(201).json({id: rows.insertId, name, description})        
    } catch (error) {
        return res.status(500).json({
            mnessage: error.message
        })
    }
}

export const updateBusiness = async(req, res) => {
    try {
        const {id} = req.params
        const { name, description, type, contact_name, contact_phone, contact_web, contact_email, image_href, keyword, location_href } = req.body
        
        const [result] = await pool.query(
            'update bot3app_control.business set name = ifnull(?,name), description = ifnull(?,description), type = ifnull(?,type), contact_name = ifnull(?,contact_name), contact_phone = ifnull(?,contact_phone), contact_web = ifnull(?,contact_web), contact_email = ifnull(?,contact_email), image_href = ifnull(?,image_href), keyword = ifnull(?,keyword), location_href = ifnull(?,location_href)  where business_id = ? ', 
            [name, description, type, contact_name, contact_phone, contact_web, contact_email, image_href, keyword, location_href, id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Business not found'
        })

        const [rows] = await pool.query('select * from bot3app_control.business where business_id = ?', [id])

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            mnessage: error.message
        })
    }
}

export const deleteBusiness = async(req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('delete from bot3app_control.business where business_id = ?', [id])

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Business not found'
        })

        res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({
            mnessage: error.message
        })
    }
}