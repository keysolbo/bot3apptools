import { Router } from 'express'
import { 
	getBusiness, 
	getBusinesses, 
	createBusiness, 
	updateBusiness, 
	deleteBusiness
} from '../controllers/business.controller.js'

const router = Router()

// GET all business
router.get('/businesses', getBusinesses)

// GET an business
router.get('/business/:id', getBusiness)

// INSERT an business
router.post('/business', createBusiness)

// UPDDATE an business
router.patch('/business/:id', updateBusiness)

// DELETE an business
router.delete('/business/:id', deleteBusiness)

export default router