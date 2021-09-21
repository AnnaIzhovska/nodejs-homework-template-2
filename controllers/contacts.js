const {NotFound} = require("http-errors");

const {sendSuccessRes} = require("../helpers");
const contactsOperations = require('../../model/contacts')

const listContacts = async (req, res) => {
      const result = await contactsOperations.listContacts()
     sendSuccessRes(res , {result})
    }

const getContactById = async (req, res) => {
      const {id} = req.params
      const result = await contactsOperations.getContactById(id)
      if(!result){
        throw new NotFound(`Contact with id=${id} not found`);
      }
      sendSuccessRes(res, {result})
    }

const addContact = async (req, res) => {

      const result = await contactsOperations.addContact(req.body)
      sendSuccessRes(res, {result}, 201)
    }

const updateContacts =  async (req, res) => {

    const {id} = req.params
    const result = await contactsOperations.updateContacts(req.body)
    if(!result){
      throw new NotFound(`Contact with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
  }

const removeContact = async (req, res) => {
      const {id} = req.params
      const result = await contactsOperations.removeContact(id)
      if(!result){
      throw new NotFound(`Contact with id=${id} not found`)
      }   
      sendSuccessRes(res, {message: "Success delete"});
    }

    module.exports = {
        listContacts,
        getContactById,
        addContact,
        updateContacts,
        removeContact
    }