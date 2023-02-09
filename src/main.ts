import { AnteekModule, Policies } from '@zicenter/anteek-core';
import { NestFactory } from '@nestjs/core';

require('dotenv').config();

async function bootstrap() {

    const app = await NestFactory.create(
        AnteekModule.forRoot({
            resolvers: 'dist/**/*.resolver.js',
            functions: 'dist/**/*.function.js',
            middlewares: 'dist/**/*.middleware.js',
            jwt: false,
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
