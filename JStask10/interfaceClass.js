class StorageProvider{
    upload(file){
        throw new Error("this is interface method!");
    }

    download(filename){
         throw new Error("this is interface method!");
    }
}

class LocalStorageProvider extends StorageProvider{
    upload(file){
        console.log(`${file} is uploaded:`);
    }

    download(filename){
        console.log(`${filename} is downloaded`);
        
    }
}


class CloudStorageProvider extends StorageProvider{
    upload(file){
        console.log(`${file} is uploaded:`);
    }

    download(filename){
        console.log(`${filename} is downloaded`);
        
    }
}


function useStorage(provider){
    if(typeof provider.upload !== "function" || typeof provider.download !== "function"){
        throw new Error("Error: Invalid storage provider");    
    } 
}


useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provider