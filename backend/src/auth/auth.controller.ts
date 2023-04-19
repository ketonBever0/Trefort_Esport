import { Body, Controller, HttpCode, HttpStatus, Post, } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto, SignInDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('signup')
    signup(@Body() dto: SignUpDto){
        return this.authService.signUp(dto);
    }
    
    @HttpCode(HttpStatus.OK) // 200
    @Post('signin')
    signin(@Body() dto: SignInDto){
        return this.authService.signIn(dto);
    }
}