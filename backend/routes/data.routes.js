import express from 'express'
import data from '../modules/data.controller.js'

const router = express.Router()

// Authentication routes

// Data routes
router.route('/api/alljpdata')
  .get(data.getAllJPData)

export default router