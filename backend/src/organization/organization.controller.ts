import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { OrganizationDto } from './dto';
import { OrganizationService } from './organization.service';
import { FileUploadService } from 'src/fileupload/fileupload.service';
import { FileInterceptor } from '@nestjs/platform-express';

const dir = 'orgpictures';
const storage = new FileUploadService().setStorage(dir).storage;

//@UseGuards(JwtGuard)
@Controller('organizations')
export class OrganizationController {
    constructor(
        private orgService: OrganizationService,
        private fileUploadService: FileUploadService
    ){}

    @Get(':id')
    getOrg(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.orgService.getOrg(id);
    }

    @Get()
    getAllOrg() {
        return this.orgService.getAllOrg();
    }

    @Post()
    signUpOrg(@Body() dto: OrganizationDto) {
        return this.orgService.signUpOrg(dto);
    }

    @Patch('accept/:id')
    acceptOrg(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.orgService.acceptOrg(id);
    }

    @Patch(':id')
    updateOrg(
        @Body() dto: OrganizationDto,
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.orgService.updateOrg(id, dto);
    }

    @Get('orgpicture/:picturename')
    getOrgPicture(
        @Param('picturename')
        picturename: string,
        @Res() res
    ){
        return this.fileUploadService.sendFile(picturename, res, dir);
    }

    @Post('uploadpicture/:id')
    @UseInterceptors(FileInterceptor('file', { storage }))
    uploadOrgPicture(
        @UploadedFile() file: Express.Multer.File,
        @Param('id') 
        id:number,
    ) {
        return this.orgService.uploadOrgPicture(id, file);
    }

    @Delete(':id')
    deleteOrg(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.orgService.deleteOrg(id);
    }
}
