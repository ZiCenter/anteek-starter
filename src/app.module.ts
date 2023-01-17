import { Module } from '@nestjs/common';
import { AnteekModule, Policies } from '@zicenter/anteek-core';

@Module({
    imports: [
        AnteekModule.forRoot({
            resolvers: 'dist/**/*.resolver.js',
            functions: 'dist/**/*.function.js',
            jwt: false,
            disableGraphIntrospection: process.env.NODE_ENV === 'production',
            policies: [
                Policies.General.allowAll()
            ]
        })
    ]
})
export class AppModule {
}
