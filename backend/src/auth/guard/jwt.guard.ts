import { AuthGuard } from "@nestjs/passport";

// így nem kell stringett fűzni a kódba, a nyers stringek hibát okozhatnak
// így csak a class-t kell beírni
export class JwtGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }
}