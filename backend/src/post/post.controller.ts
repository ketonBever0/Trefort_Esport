import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PostService } from './post.service';
import { User } from '@prisma/client';
import { PostDto } from './dto';
import { GetUser } from 'src/auth/decorator';

@Controller('posts')
@UseGuards(JwtGuard)
export class PostController {
    constructor(private postService: PostService) {}

    @Get('all')
    getPosts() {
        return this.postService.getPosts();
    }

    @Get('my')
    getMyPosts(
        @GetUser() user: User
    ) {
        return this.postService.getMyPosts(user);
    }

    @Get('pending')
    getPendingPosts() {
        return this.postService.getPendingPosts();
    }

    @Get(':id')
    getPost(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.postService.getPost(id);
    }

    @Get('author/:id')
    getPostsByAuthor(
        @Param('id', new ParseIntPipe())
        userId: number
    ) {
        return this.postService.getPostsByAuthor(userId);
    }

    @Post('')
    createPost(
       @GetUser() user: User,
       @Body() dto: PostDto
    ) {
        return this.postService.createPost(user, dto);
    }

    @Post('accept/:id')
    acceptPost(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.postService.acceptPost(id);
    }
}
