import { Module } from '@nestjs/common';
import { AnteekModule } from '@zicenter/anteek-core';

@Module({
    imports: [
        AnteekModule.forRoot({
            resolvers: 'dist/**/*.resolver.js',
            functions: 'dist/**/*.function.js',
            jwt: {}
        })
    ]
})
export class AppModule {
}
