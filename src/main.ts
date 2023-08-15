import { AnteekModule, Policies, requestLogger } from '@zicenter/anteek-core';
import { NestFactory } from '@nestjs/core';
import { UserService } from './services/user.service';
import { generatedConfig } from '__generated__/anteek.config';

require('dotenv').config();

async function bootstrap() {
    const app = await NestFactory.create(
        AnteekModule.forRoot({
            ...generatedConfig,
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

    requestLogger(app);

    await app.listen(3000);
}
bootstrap();
