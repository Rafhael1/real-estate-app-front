/*import { Router } from 'express'

const Property = require('./models/property')

router.get("/api/")

router.post('/api/create', async(req, res) => {
  try {
    const record = {
      title: 'A',
      description: 'b',
      address: 'c',
      country: 'd', 
      price: 1231,
      status: 'f',
      images: ['g']
    } 
  
    
    await Property.create(record)
  } catch (error) {
    
  }
})

router.post('/api/upload', async(req, res) => {
  try {
    if(req.body && req.files){

      const {title, description, address, country, price, status} = JSON.parse(req.body.document)
   
      let files: any = await req.files.image;

      const uploadPath = __dirname + '/uploads/' + Date.now() + files.name;
  
      files.mv(uploadPath, (err: string) => {
        if (err){
          console.log(err)
        } else {
          console.log('Image Moved into the folder')
        }
        });

      const data = await {
        title: title,
        description: description,
        address: address,
        country: country, 
        price: price,
        status: status,
        images: uploadPath
        }

      await Property.create(data);
      
    } 
  } catch (error) {
    console.log(error)
  }
}) */