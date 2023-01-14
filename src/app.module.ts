import { Module } from '@nestjs/common';
import { AnteekModule } from '@zicenter/anteek-core';

@Module({
    imports: [
        AnteekModule.forRoot({
            resolvers: 'dist/**/*.resolver.js',
            functions: 'dist/**/*.function.js',
            jwt: {},
            disableGraphIntrospection: process.env.NODE_ENV === 'production'
        })
    ]
})
export class AppModule {
}
