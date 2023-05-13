import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from './dto';

@Injectable()
export class PostService {
    constructor(private prismaService: PrismaService) {}

    async getPost(id: number) {
        const post = await this.prismaService.post.findUnique({
            where: { 
                id: id 
            },
        });

        return {
            post
        }
    }

    async getPendingPosts() {
        const posts = await this.prismaService.post.findMany({
            where: {
                publishedAt: null
            }
        });
        return {
            posts
        }
    }

    async getPosts() {
        const posts = await this.prismaService.post.findMany({
            where: {
                publishedAt: {
                    not: null
                }
            }
        });
        return {
            posts
        }
    }

    async getMyPosts(
       user : User
    ) {
        const posts = await this.prismaService.post.findMany({
            where: {
                userId: user.id
            }
        });
        return {
            posts
        }
    }

    async getPostsByAuthor(
        userId: number
    ) {
        const posts = await this.prismaService.post.findMany({
            where: {
                userId: userId
            }
        });
        return {
            posts
        }
    }

    async createPost(
        user: User,
        dto: PostDto
    ) {
        const post = await this.prismaService.post.create({
            data: {
                userId: user.id,
                title: dto.title,
                header: dto.header,
                content: dto.content,
            }
        });

        return {
            message: "Poszt jóváhagyásra vár!",
            post
        }
    }

    async acceptPost(
        id: number
    ) {
        const post = await this.prismaService.post.update({
            where: {
                id: id
            },
            data: {
                publishedAt: new Date()
            }
        });

        return {
            message: "Poszt elfogadva!",
            post
        }
    }
}
