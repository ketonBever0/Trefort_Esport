import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import path = require('path');
import { Observable, of } from 'rxjs';
import sharp = require('sharp');
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileUploadService {

    async validateImage(file: any) {

        const image = sharp(file.path);
        const metadata = await image.metadata();
        
        return metadata.format === 'jpeg';
    }

    setStorage(
        foldername: string
    ){
        return {
            storage: diskStorage({
                destination: `./uploads/${foldername}`,
                filename: (req, file, cb) => {
                    // get file name
                    const fileName = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                    // get file extension
                    const fileExtName = path.parse(file.originalname).ext;
                    // return file name and extension
                    cb(null, `${fileName}${fileExtName}`);
                }
            })
        }
    }

    sendFile(
        imageName: string,
        res: any,
        dir: string
    ): Observable<Object> {
        return of(res.sendFile(path.join(process.cwd(), `uploads/${dir}/` + imageName)));
    }
}

