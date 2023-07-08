import { AnteekModule, Policies } from '@zicenter/anteek-core';
import { NestFactory } from '@nestjs/core';
import { UserService } from './services/user.service';

require('dotenv').config();

async function bootstrap() {

    const app = await NestFactory.create(
        AnteekModule.forRoot({
            resolvers: 'dist/**/*.resolver.js',
            functions: 'dist/**/*.function.js',
            middlewares: 'dist/**/*.middleware.js',
            federated: process.env.FEDERATED === 'true',
            jwt: {
                secret: 'DevelopmentSecretDoNotUseInProduction!!!',
                userService: UserService
            },
            disableGraphIntrospection: process.env.NODE_ENV === 'production',
            policies: [
                Policies.General.allowAll()
            ],
            imports: [],
            providers: [],
        })
    );

    await app.listen(3000);
}
bootstrap();
