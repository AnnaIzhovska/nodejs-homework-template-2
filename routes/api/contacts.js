const express = require('express')

const {contactSchema} = require('../../schemas')
const {controllerWrapper, validation} = require("../../middlewares");
const {products: ctrl} = require("../../controllers");

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(contactSchema))

router.put('/:contactId', validation(contactSchema))

router.delete('/:contactId', controllerWrapper(ctrl.removeContact))

module.exports = router
