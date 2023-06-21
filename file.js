const fs = require('fs');

exports.saveFile=(data,name)=>{
const jsonData = JSON.stringify(data,null, 2);
const filePath =name+'.json';
fs.writeFile(filePath,jsonData, 'utf-8',(err) =>{
    if (err){
        console.error('An error occur while writing to the file:', err);

    }else{
        console.log('Data has been successfully saved to the file.');
    }
})};